import { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Plus,
  Trash2,
  Save,
  RotateCcw,
  Sparkles,
  Award,
  User,
  MapPin,
  Phone,
  Mail,
  Edit3,
  Heart,
  MessageSquare
} from "lucide-react";
import SEO from "../../components/SEO";
import {
  getTherapists,
  saveTherapist,
  deleteTherapist,
  saveTherapists,
  Therapist,
  Testimonial
} from "../../utils/therapistStore";

export default function ManageTherapists() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [therapists, setTherapists] = useState<Therapist[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  
  // Form State
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [experience, setExperience] = useState("");
  const [rating, setRating] = useState(5);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [bio, setBio] = useState("");
  const [expertiseInput, setExpertiseInput] = useState("");
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  
  // New Testimonial State
  const [newTestimonialText, setNewTestimonialText] = useState("");
  const [newTestimonialAuthor, setNewTestimonialAuthor] = useState("");

  const refreshList = () => {
    const list = getTherapists();
    setTherapists(list);
    return list;
  };

  useEffect(() => {
    const list = refreshList();
    
    // Check if edit query parameter exists
    const editId = searchParams.get("edit");
    if (editId) {
      const idNum = Number(editId);
      const found = list.find((t) => t.id === idNum);
      if (found) {
        loadTherapistIntoForm(found);
      } else {
        loadEmptyForm();
      }
    } else {
      // Default to first therapist or empty
      if (list.length > 0) {
        loadTherapistIntoForm(list[0]);
      } else {
        loadEmptyForm();
      }
    }
  }, [searchParams]);

  const loadTherapistIntoForm = (t: Therapist) => {
    setSelectedId(t.id);
    setName(t.name);
    setLocation(t.location);
    setSpecialization(t.specialization);
    setQualifications(t.qualifications);
    setExperience(t.experience);
    setRating(t.rating);
    setPhone(t.phone);
    setEmail(t.email);
    setImage(t.image);
    setBio(t.bio);
    setExpertiseInput(t.expertise.join(", "));
    setTestimonials(t.testimonials || []);
    setNewTestimonialText("");
    setNewTestimonialAuthor("");
  };

  const loadEmptyForm = () => {
    setSelectedId(null);
    setName("");
    setLocation("");
    setSpecialization("");
    setQualifications("");
    setExperience("");
    setRating(5);
    setPhone("");
    setEmail("");
    setImage("");
    setBio("");
    setExpertiseInput("");
    setTestimonials([]);
    setNewTestimonialText("");
    setNewTestimonialAuthor("");
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !location || !specialization) {
      alert("Please fill in Name, Location, and Specialization fields.");
      return;
    }

    const expertiseArray = expertiseInput
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    const updatedTherapist: Therapist = {
      id: selectedId !== null ? selectedId : Date.now(),
      name,
      location,
      specialization,
      qualifications,
      experience: experience || "5 years",
      rating,
      phone: phone || "+44 20 1234 5678",
      email: email || "info@bylart.com",
      image: image || "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=800",
      bio,
      expertise: expertiseArray,
      testimonials,
    };

    saveTherapist(updatedTherapist);
    const updatedList = refreshList();
    
    setSuccessMessage(
      selectedId !== null
        ? "Therapist details updated successfully!"
        : "New therapist added successfully!"
    );
    
    setTimeout(() => setSuccessMessage(null), 4000);
    
    // Keep editing the newly saved/existing one
    loadTherapistIntoForm(updatedTherapist);
    
    // Clear URL parameters
    setSearchParams({});
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this therapist from the directory?")) {
      deleteTherapist(id);
      const list = refreshList();
      showNotification("Therapist deleted.");
      if (list.length > 0) {
        loadTherapistIntoForm(list[0]);
      } else {
        loadEmptyForm();
      }
    }
  };

  const handleResetDefaults = () => {
    if (
      window.confirm(
        "Warning: This will restore the original 12 certified therapists and overwrite any changes you made. Do you want to proceed?"
      )
    ) {
      localStorage.removeItem("bylart_therapists");
      const list = refreshList();
      showNotification("Directory reset to default 12 certified therapists.");
      if (list.length > 0) {
        loadTherapistIntoForm(list[0]);
      } else {
        loadEmptyForm();
      }
      setSearchParams({});
    }
  };

  const addTestimonial = () => {
    if (!newTestimonialText.trim() || !newTestimonialAuthor.trim()) {
      alert("Please provide both testimonial comment and client author name.");
      return;
    }
    const updated = [
      ...testimonials,
      { text: newTestimonialText.trim(), author: newTestimonialAuthor.trim() }
    ];
    setTestimonials(updated);
    setNewTestimonialText("");
    setNewTestimonialAuthor("");
  };

  const removeTestimonial = (index: number) => {
    const updated = testimonials.filter((_, i) => i !== index);
    setTestimonials(updated);
  };

  const showNotification = (msg: string) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(null), 4000);
  };

  return (
    <>
      <SEO
        title="Manage Directory - Admin Panel"
        description="Add, edit, or delete therapists in the BYLART certified practitioner directory."
      />

      <div className="pt-24 pb-12 bg-gradient-to-br from-emerald-800 via-teal-700 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div>
              <Link
                to="/therapists/find"
                className="inline-flex items-center text-emerald-200 hover:text-white mb-3 transition-colors text-sm"
              >
                <ChevronLeft size={16} className="mr-1" />
                Back to Directory
              </Link>
              <h1 className="text-4xl font-bold font-serif flex items-center">
                <Sparkles className="mr-3 text-emerald-300" size={32} />
                Therapist Directory Manager
              </h1>
              <p className="text-emerald-100 text-sm mt-1">
                Customize certified practitioners, details, and testimonials interactively.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleResetDefaults}
                className="inline-flex items-center px-4 py-2 bg-red-900/40 hover:bg-red-900/60 border border-red-700 text-red-100 rounded-xl text-sm font-semibold transition-all"
                title="Restore initial 12 therapists"
              >
                <RotateCcw size={16} className="mr-2" />
                Reset Defaults
              </button>
              
              <button
                onClick={loadEmptyForm}
                className="inline-flex items-center px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-xl text-sm transition-all shadow-md transform hover:scale-[1.02]"
              >
                <Plus size={16} className="mr-2" />
                Add New Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gradient-to-br from-emerald-50/20 to-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {successMessage && (
            <div className="mb-8 p-4 bg-emerald-100 border border-emerald-300 text-emerald-950 rounded-2xl flex items-center justify-between animate-fade-in-up font-medium shadow-md">
              <div className="flex items-center">
                <Sparkles className="mr-2 text-emerald-700" size={20} />
                {successMessage}
              </div>
              <button
                onClick={() => setSuccessMessage(null)}
                className="text-emerald-800 hover:text-emerald-950 text-sm font-bold"
              >
                Dismiss
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar list */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 shadow-xl border border-gray-100 space-y-6">
              <h2 className="text-xl font-bold text-gray-900 font-serif border-b border-gray-100 pb-3">
                Therapists Directory ({therapists.length})
              </h2>
              
              <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
                {therapists.map((t) => (
                  <div
                    key={t.id}
                    onClick={() => loadTherapistIntoForm(t)}
                    className={`flex items-center p-3 rounded-2xl cursor-pointer transition-all border ${
                      selectedId === t.id
                        ? "bg-emerald-50 border-emerald-300 shadow-sm"
                        : "border-gray-50 hover:bg-gray-50/80 hover:border-gray-100"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl overflow-hidden mr-3 bg-emerald-100 flex-shrink-0">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=100";
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 text-sm truncate">
                        {t.name}
                      </h4>
                      <p className="text-xs text-emerald-700 truncate font-semibold">
                        {t.specialization}
                      </p>
                      <p className="text-[10px] text-gray-400">
                        {t.location}
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(t.id);
                      }}
                      className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors ml-2"
                      title="Delete profile"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}

                {therapists.length === 0 && (
                  <div className="text-center py-8 text-gray-400 text-sm">
                    No therapists available. Click "Add New Profile" to create one.
                  </div>
                )}
              </div>
            </div>

            {/* Form Editor */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 font-serif flex items-center">
                  <Edit3 className="mr-2.5 text-emerald-600" size={24} />
                  {selectedId !== null ? "Edit Therapist Profile" : "Create New Therapist"}
                </h2>
                {selectedId !== null && (
                  <Link
                    to={`/therapists/${selectedId}`}
                    className="text-xs font-semibold text-emerald-600 hover:text-emerald-800 transition-colors flex items-center bg-emerald-50 px-3.5 py-1.5 rounded-lg"
                  >
                    View Live Profile →
                  </Link>
                )}
              </div>

              <form onSubmit={handleSave} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center">
                      <User size={14} className="mr-1.5 text-emerald-600" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="e.g. Dr. Sarah Mitchell"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center">
                      <MapPin size={14} className="mr-1.5 text-emerald-600" />
                      Location *
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                      placeholder="e.g. London, UK"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center">
                      <Heart size={14} className="mr-1.5 text-emerald-600" />
                      Primary Specialization *
                    </label>
                    <input
                      type="text"
                      value={specialization}
                      onChange={(e) => setSpecialization(e.target.value)}
                      required
                      placeholder="e.g. Anxiety & Stress Management"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center">
                      <Award size={14} className="mr-1.5 text-emerald-600" />
                      Qualifications
                    </label>
                    <input
                      type="text"
                      value={qualifications}
                      onChange={(e) => setQualifications(e.target.value)}
                      placeholder="e.g. PhD in Holistic Health, BFRP Certified"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center">
                      <Award size={14} className="mr-1.5 text-emerald-600" />
                      Years of Experience
                    </label>
                    <input
                      type="text"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      placeholder="e.g. 15 years"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center">
                      <Star size={14} className="mr-1.5 text-emerald-600" />
                      Directory Rating (1-5 Stars)
                    </label>
                    <select
                      value={rating}
                      onChange={(e) => setRating(Number(e.target.value))}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="5">⭐⭐⭐⭐⭐ (5 Stars)</option>
                      <option value="4">⭐⭐⭐⭐ (4 Stars)</option>
                      <option value="3">⭐⭐⭐ (3 Stars)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center">
                      <Phone size={14} className="mr-1.5 text-emerald-600" />
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +44 20 1234 5678"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center">
                      <Mail size={14} className="mr-1.5 text-emerald-600" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sarah.mitchell@bylart.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center">
                    <User size={14} className="mr-1.5 text-emerald-600" />
                    Profile Picture URL
                  </label>
                  <input
                    type="url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="e.g. https://images.unsplash.com/photo-..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 mb-2"
                  />
                  <p className="text-xs text-gray-400">
                    Provide a valid image URL. If left empty, a beautiful default placeholder portrait will be used.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center">
                    <Heart size={14} className="mr-1.5 text-emerald-600" />
                    Areas of Expertise (Comma separated)
                  </label>
                  <input
                    type="text"
                    value={expertiseInput}
                    onChange={(e) => setExpertiseInput(e.target.value)}
                    placeholder="e.g. Chronic Stress, Panic Attacks, Sibling Rivalry, Phobias"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Separate each specialty tag with a comma. They will appear as badges on the directory and profile.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center">
                    <User size={14} className="mr-1.5 text-emerald-600" />
                    Detailed Biography
                  </label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={5}
                    placeholder="Tell visitors about this therapist's credentials, unique approach, and healing philosophy..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  ></textarea>
                </div>

                {/* TESTIMONIALS SECTION */}
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="text-lg font-bold text-gray-900 font-serif mb-4 flex items-center">
                    <MessageSquare size={18} className="mr-2 text-emerald-600" />
                    Manage Reviews & Testimonials
                  </h3>
                  
                  <div className="space-y-3 mb-6 bg-emerald-50/30 p-4 rounded-2xl border border-emerald-100/50">
                    {testimonials.map((test, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-xl border border-gray-100 flex items-start justify-between shadow-sm"
                      >
                        <div className="flex-1 min-w-0 pr-4">
                          <p className="text-sm text-gray-700 italic">"{test.text}"</p>
                          <p className="text-xs text-emerald-800 font-bold mt-1">— {test.author}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeTestimonial(index)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1.5 rounded-lg transition-colors flex-shrink-0"
                          title="Remove review"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}

                    {testimonials.length === 0 && (
                      <div className="text-center py-3 text-xs text-gray-400 italic">
                        No reviews added yet. Add a testimonial below to build credibility!
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <div className="md:col-span-8">
                      <label className="block text-xs font-semibold text-gray-500 mb-1">
                        Testimonial Quote Content
                      </label>
                      <input
                        type="text"
                        value={newTestimonialText}
                        onChange={(e) => setNewTestimonialText(e.target.value)}
                        placeholder="e.g. This therapy changed my perspective entirely, I feel so balanced."
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 bg-white"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label className="block text-xs font-semibold text-gray-500 mb-1">
                        Client Name
                      </label>
                      <input
                        type="text"
                        value={newTestimonialAuthor}
                        onChange={(e) => setNewTestimonialAuthor(e.target.value)}
                        placeholder="e.g. Clara O."
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 bg-white"
                      />
                    </div>
                    <div className="md:col-span-1">
                      <button
                        type="button"
                        onClick={addTestimonial}
                        className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-sm transition-colors shadow-sm"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-100">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-emerald-200 transition-all transform hover:scale-[1.01]"
                  >
                    <Save size={20} className="mr-2" />
                    Save Directory Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
