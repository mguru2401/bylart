export interface Testimonial {
  text: string;
  author: string;
}

export interface Therapist {
  id: number;
  name: string;
  location: string;
  specialization: string;
  qualifications: string;
  expertise: string[];
  experience: string;
  rating: number;
  phone: string;
  email: string;
  image: string;
  bio: string;
  testimonials: Testimonial[];
}

const defaultTherapists: Therapist[] = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    location: "London, UK",
    specialization: "Anxiety & Stress Management",
    qualifications: "PhD in Holistic Health, BFRP Certified, Dip. Bach Therapy",
    expertise: ["Chronic Stress", "Panic Attacks", "Phobias", "Social Anxiety", "Burnout"],
    experience: "15 years",
    rating: 5,
    phone: "+44 20 1234 5678",
    email: "sarah.mitchell@bylart.com",
    image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Dr. Sarah Mitchell is a leading expert in Bach Flower Therapy with over 15 years of experience helping individuals navigate emotional challenges. She specializes in anxiety and stress management, using a compassionate approach to restore inner peace. Her holistic methods combine flower remedies with mindfulness practices to help clients build long-term emotional resilience.",
    testimonials: [
      {
        text: "Dr. Sarah's guidance changed my life. The remedies she recommended helped me manage my anxiety when nothing else worked.",
        author: "James Dean",
      },
      {
        text: "Highly professional and extremely empathetic. The personalized Bach Flower blend helped me overcome my panic attacks.",
        author: "Clara Oswald"
      }
    ],
  },
  {
    id: 2,
    name: "Emma Thompson",
    location: "Manchester, UK",
    specialization: "Children & Family Therapy",
    qualifications: "MSc in Child Psychology, BFRP Certified, Family Wellness Coach",
    expertise: ["Tantrums", "Separation Anxiety", "Exam Stress", "Sibling Rivalry", "ADHD Support"],
    experience: "10 years",
    rating: 5,
    phone: "+44 161 234 5678",
    email: "emma.thompson@bylart.com",
    image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Emma Thompson is a dedicated child and family therapist who specializes in using Bach Flower remedies to address emotional imbalances in children and adolescents. With 10 years of clinical experience, Emma works closely with parents to create gentle, natural treatment plans that support kids facing school anxiety, behavioral difficulties, or major life changes.",
    testimonials: [
      {
        text: "Emma helped our 8-year-old son overcome his extreme school anxiety. The flower drops were incredibly easy to administer and worked wonders.",
        author: "Robert & Lisa",
      }
    ],
  },
  {
    id: 3,
    name: "Dr. James Wilson",
    location: "Edinburgh, UK",
    specialization: "Depression & Trauma",
    qualifications: "MD in Psychiatry, BFRP Certified, Trauma Specialist",
    expertise: ["Chronic Sadness", "Grief & Bereavement", "PTSD Support", "Emotional Blockages", "Self-Reflection"],
    experience: "20 years",
    rating: 5,
    phone: "+44 131 234 5678",
    email: "james.wilson@bylart.com",
    image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Dr. James Wilson is a psychiatrist and certified Bach Flower practitioner with two decades of experience in trauma recovery. He uses a combined approach of modern therapeutic dialogue and Dr. Bach's natural flower remedies to help clients unlock deep-seated emotional blockages, navigate grief, and recover from traumatic experiences.",
    testimonials: [
      {
        text: "Dr. James has an incredible depth of understanding. His custom remedy helped me step out of a dark period of despondency.",
        author: "Sarah Jenkins",
      }
    ],
  },
  {
    id: 4,
    name: "Rachel Phillips",
    location: "Birmingham, UK",
    specialization: "Relationship Issues",
    qualifications: "MA in Counseling, Certified Relationship Coach, BFRP",
    expertise: ["Codependency", "Jealousy", "Communication Barriers", "Divorce Recovery", "Trust Building"],
    experience: "12 years",
    rating: 5,
    phone: "+44 121 234 5678",
    email: "rachel.phillips@bylart.com",
    image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Rachel Phillips is a licensed relationship therapist and Bach Flower specialist. She focuses on healing interpersonal dynamics by addressing the underlying emotional states of the individuals involved. Her tailored remedies help clients overcome possessiveness, cultivate open communication, and heal emotional wounds from past relationships.",
    testimonials: [
      {
        text: "Her expertise in both counseling and Bach remedies helped my partner and me resolve our long-standing communication blockages.",
        author: "David K.",
      }
    ],
  },
  {
    id: 5,
    name: "Michael Chen",
    location: "Bristol, UK",
    specialization: "Workplace Stress",
    qualifications: "BS in Occupational Therapy, Certified Wellness Consultant, BFRP",
    expertise: ["Burnout", "Career Transitions", "Public Speaking Fear", "Imposter Syndrome", "Time Management"],
    experience: "8 years",
    rating: 5,
    phone: "+44 117 234 5678",
    email: "michael.chen@bylart.com",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Michael Chen is an occupational wellness specialist who helps professionals manage corporate burnout and find work-life balance using Bach Flower remedies. He works with executives and creative practitioners to conquer imposter syndrome, overcome the fear of public speaking, and navigate challenging career changes smoothly.",
    testimonials: [
      {
        text: "The Larch and Elm mixture Michael prepared for me gave me the confidence to present at our annual summit without a trace of panic.",
        author: "Linda M.",
      }
    ],
  },
  {
    id: 6,
    name: "Dr. Lisa Anderson",
    location: "Leeds, UK",
    specialization: "Grief & Loss",
    qualifications: "PhD in Thanatology, Licensed Clinical Counselor, BFRP",
    expertise: ["Bereavement", "Pet Loss Support", "Life Transitions", "Sudden Shock", "Acceptance"],
    experience: "18 years",
    rating: 5,
    phone: "+44 113 234 5678",
    email: "lisa.anderson@bylart.com",
    image: "https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Dr. Lisa Anderson is a clinical counselor specializing in grief counseling and end-of-life transitions. Through her integrative practice, she introduces clients to the comforting support of Bach Flower essences like Star of Bethlehem and Walnut to ease the shock and deep sorrow associated with losing a loved one.",
    testimonials: [
      {
        text: "I lost my husband and felt completely numb. Dr. Lisa's compassionate presence and remedy bottle helped me find the strength to breathe again.",
        author: "Margaret S.",
      }
    ],
  },
  {
    id: 7,
    name: "Jonathan Wright",
    location: "Oxford, UK",
    specialization: "Sleep & Insomnia",
    qualifications: "Diplomate in Sleep Sciences, Certified Herbalist, BFRP",
    expertise: ["Racing Thoughts", "Night Terrors", "Restlessness", "Chronic Fatigue", "Relaxation Techniques"],
    experience: "14 years",
    rating: 5,
    phone: "+44 1865 234 567",
    email: "jonathan.wright@bylart.com",
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Jonathan Wright is an expert in natural sleep optimization. Over the last 14 years, he has successfully helped clients resolve severe sleep disturbances by targeting the emotional factors (such as racing thoughts or generalized fear) that prevent deep rest, utilizing specific essences like White Chestnut and Agrimony.",
    testimonials: [
      {
        text: "After years of relying on prescription sleeping aids, Jonathan's natural remedies finally gave me peaceful, natural sleep.",
        author: "Simon P.",
      }
    ],
  },
  {
    id: 8,
    name: "Claire Bennett",
    location: "Cambridge, UK",
    specialization: "Confidence & Self-Esteem",
    qualifications: "BA in Psychology, Life Coach Certification, BFRP Certified",
    expertise: ["Low Self-Worth", "Self-Doubt", "Decision Fatigue", "Boundaries", "Assertiveness"],
    experience: "11 years",
    rating: 5,
    phone: "+44 1223 234 567",
    email: "claire.bennett@bylart.com",
    image: "https://images.pexels.com/photos/5215017/pexels-photo-5215017.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Claire Bennett is a life coach and Bach Flower therapist passionate about helping women step into their power. She specializes in building self-worth, teaching clients how to set healthy boundaries, and overcoming paralyzing self-doubt using essences like Larch, Cerato, and Pine.",
    testimonials: [
      {
        text: "Claire showed me how to stop constantly seeking validation. The remedies helped me trust my own intuition.",
        author: "Grace H.",
      }
    ],
  },
  {
    id: 9,
    name: "David Foster",
    location: "Liverpool, UK",
    specialization: "Fear & Phobias",
    qualifications: "MSc in Clinical Psychology, Cognitive Behavioral Specialist, BFRP",
    expertise: ["Specific Fears", "Panic Attacks", "Agoraphobia", "Fear of the Unknown", "Emotional Control"],
    experience: "22 years",
    rating: 5,
    phone: "+44 151 234 5678",
    email: "david.foster@bylart.com",
    image: "https://images.pexels.com/photos/5327660/pexels-photo-5327660.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "David Foster is a clinical psychologist with over 20 years of experience who integrates Cognitive Behavioral Therapy (CBT) with Bach Flower Remedies. He has pioneered customized programs for phobia recovery, panic release, and generalized apprehension using Rock Rose, Aspen, and Mimulus.",
    testimonials: [
      {
        text: "My agoraphobia made leaving the house impossible. David's gentle plan slowly but surely restored my freedom.",
        author: "Arthur Pendragon",
      }
    ],
  },
  {
    id: 10,
    name: "Sophie Martin",
    location: "Newcastle, UK",
    specialization: "Life Transitions",
    qualifications: "MA in Sociology, Holistic Transition Coach, BFRP",
    expertise: ["Midlife Crisis", "Empty Nest Syndrome", "Relocation Stress", "New Parent Adjustment", "Adaptability"],
    experience: "9 years",
    rating: 5,
    phone: "+44 191 234 5678",
    email: "sophie.martin@bylart.com",
    image: "https://images.pexels.com/photos/5215021/pexels-photo-5215021.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Sophie Martin helps people adapt to major changes in their lives, including career shifts, retirement, empty nest syndrome, and relocation. She utilizes flower essences, particularly Walnut, to shield clients from external influences and help them transition with grace, enthusiasm, and confidence.",
    testimonials: [
      {
        text: "Moving to a new country was incredibly overwhelming. Sophie's transition therapy was the emotional anchor I desperately needed.",
        author: "Elena K.",
      }
    ],
  },
  {
    id: 11,
    name: "Dr. Kevin Miller",
    location: "Sheffield, UK",
    specialization: "Trauma Recovery",
    qualifications: "PsyD in Clinical Psychology, Somatic Experiencing Practitioner, BFRP",
    expertise: ["Developmental Trauma", "Childhood Wounds", "Hypervigilance", "Emotional Numbness", "Inner Child Work"],
    experience: "19 years",
    rating: 5,
    phone: "+44 114 234 5678",
    email: "kevin.miller@bylart.com",
    image: "https://images.pexels.com/photos/5452292/pexels-photo-5452292.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Dr. Kevin Miller is a psychologist and somatic practitioner specializing in deep trauma recovery. He uses somatic therapy coupled with Bach Flower essences to resolve childhood developmental trauma and chronic hypervigilance, creating custom blends that restore safety in the body.",
    testimonials: [
      {
        text: "Dr. Kevin helped me connect with my body and heal trauma I had carried for decades. I feel a profound sense of safety now.",
        author: "Victor C.",
      }
    ],
  },
  {
    id: 12,
    name: "Elena Rodriguez",
    location: "Cardiff, UK",
    specialization: "Emotional Resilience",
    qualifications: "Diplomate in Holistic Counseling, BFRP Certified Trainer",
    expertise: ["Mood Swings", "Hypersensitivity", "Overthinking", "Fatigue", "Inner Balance"],
    experience: "13 years",
    rating: 5,
    phone: "+44 29 1234 5678",
    email: "elena.rodriguez@bylart.com",
    image: "https://images.pexels.com/photos/5215003/pexels-photo-5215003.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Elena Rodriguez is an international Bach Flower educator and practitioner. She works with highly sensitive people (HSPs) to convert emotional vulnerability into strong emotional resilience. Her customized treatment plans help balance rapid shifts in mood and foster deep-rooted self-acceptance.",
    testimonials: [
      {
        text: "Elena understands high sensitivity like no one else. Her custom remedy blends have helped me thrive rather than just survive in busy environments.",
        author: "Isabella G.",
      }
    ],
  }
];

const LOCAL_STORAGE_KEY = "bylart_therapists";

export function getTherapists(): Therapist[] {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!data) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultTherapists));
      return defaultTherapists;
    }
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading therapists from localStorage", error);
    return defaultTherapists;
  }
}

export function saveTherapists(therapists: Therapist[]): void {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(therapists));
  } catch (error) {
    console.error("Error saving therapists to localStorage", error);
  }
}

export function getTherapistById(id: number): Therapist | undefined {
  const therapists = getTherapists();
  return therapists.find((t) => t.id === id);
}

export function saveTherapist(therapist: Therapist): void {
  const therapists = getTherapists();
  const index = therapists.findIndex((t) => t.id === therapist.id);
  if (index >= 0) {
    therapists[index] = therapist;
  } else {
    therapists.push(therapist);
  }
  saveTherapists(therapists);
}

export function deleteTherapist(id: number): void {
  const therapists = getTherapists();
  const filtered = therapists.filter((t) => t.id !== id);
  saveTherapists(filtered);
}
