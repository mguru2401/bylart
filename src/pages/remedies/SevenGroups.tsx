import SEO from '../../components/SEO';

const groups = [
  {
    name: 'Fear',
    description: 'For those experiencing various types of fear and anxiety',
    remedies: [
      { name: 'Rock Rose', detail: 'For terror and panic' },
      { name: 'Mimulus', detail: 'For fear of known things' },
      { name: 'Cherry Plum', detail: 'For fear of losing control' },
      { name: 'Aspen', detail: 'For vague, unknown fears' },
      { name: 'Red Chestnut', detail: 'For excessive fear for others' },
    ],
    color: 'from-red-50 to-rose-50',
    iconBg: 'bg-red-600',
  },
  {
    name: 'Uncertainty',
    description: 'For those who suffer doubt and indecision',
    remedies: [
      { name: 'Cerato', detail: 'For those who doubt their own judgment' },
      { name: 'Scleranthus', detail: 'For indecision and uncertainty' },
      { name: 'Gentian', detail: 'For discouragement and despondency' },
      { name: 'Gorse', detail: 'For hopelessness and despair' },
      { name: 'Hornbeam', detail: 'For tiredness and procrastination' },
      { name: 'Wild Oat', detail: 'For uncertainty in life direction' },
    ],
    color: 'from-orange-50 to-amber-50',
    iconBg: 'bg-orange-600',
  },
  {
    name: 'Insufficient Interest in Present Circumstances',
    description: 'For those not sufficiently interested in present circumstances',
    remedies: [
      { name: 'Clematis', detail: 'For dreaminess and lack of focus' },
      { name: 'Honeysuckle', detail: 'For living in the past' },
      { name: 'Wild Rose', detail: 'For resignation and apathy' },
      { name: 'Olive', detail: 'For exhaustion' },
      { name: 'White Chestnut', detail: 'For unwanted thoughts' },
      { name: 'Mustard', detail: 'For deep gloom' },
      { name: 'Chestnut Bud', detail: 'For failure to learn from experience' },
    ],
    color: 'from-yellow-50 to-amber-50',
    iconBg: 'bg-yellow-600',
  },
  {
    name: 'Loneliness',
    description: 'For those who experience loneliness',
    remedies: [
      { name: 'Water Violet', detail: 'For pride and aloofness' },
      { name: 'Impatiens', detail: 'For impatience and irritability' },
      { name: 'Heather', detail: 'For self-centeredness' },
    ],
    color: 'from-blue-50 to-cyan-50',
    iconBg: 'bg-blue-600',
  },
  {
    name: 'Oversensitivity to Influences and Ideas',
    description: 'For those oversensitive to influences and ideas',
    remedies: [
      { name: 'Agrimony', detail: 'For mental torture behind a brave face' },
      { name: 'Centaury', detail: 'For weak will' },
      { name: 'Walnut', detail: 'For protection during change' },
      { name: 'Holly', detail: 'For hatred, envy, and jealousy' },
    ],
    color: 'from-emerald-50 to-teal-50',
    iconBg: 'bg-emerald-600',
  },
  {
    name: 'Despondency or Despair',
    description: 'For those who suffer despondency and despair',
    remedies: [
      { name: 'Larch', detail: 'For lack of confidence' },
      { name: 'Pine', detail: 'For guilt and self-blame' },
      { name: 'Elm', detail: 'For overwhelming responsibility' },
      { name: 'Sweet Chestnut', detail: 'For extreme anguish' },
      { name: 'Star of Bethlehem', detail: 'For shock and trauma' },
      { name: 'Willow', detail: 'For resentment and bitterness' },
      { name: 'Oak', detail: 'For the brave struggler' },
      { name: 'Crab Apple', detail: 'For self-disgust' },
    ],
    color: 'from-slate-50 to-gray-50',
    iconBg: 'bg-slate-600',
  },
  {
    name: 'Over-care for the Welfare of Others',
    description: 'For those who overcare for the welfare of others',
    remedies: [
      { name: 'Chicory', detail: 'For possessive love' },
      { name: 'Vervain', detail: 'For over-enthusiasm' },
      { name: 'Vine', detail: 'For dominance' },
      { name: 'Beech', detail: 'For intolerance' },
      { name: 'Rock Water', detail: 'For self-denial' },
    ],
    color: 'from-violet-50 to-purple-50',
    iconBg: 'bg-violet-600',
  },
];

export default function SevenGroups() {
  return (
    <>
      <SEO
        title="The Seven Bach Flower Groups"
        description="Discover Dr. Bach's seven emotional categories and the 38 remedies organized by emotional states. Understanding the Bach Flower classification system."
        keywords="seven bach flower groups, bach remedy categories, flower remedy classification, emotional categories"
      />

      <div className="pt-24 pb-12 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              The Seven Bach Flower Groups
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Dr. Bach organized the 38 remedies into seven emotional categories
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Dr. Edward Bach identified seven fundamental emotional imbalances that affect human well-being. Each of the 38 Bach flower remedies falls into one of these categories, making it easier to identify the right remedy for your emotional state.
            </p>
          </div>

          <div className="space-y-8">
            {groups.map((group, index) => (
              <div
                key={group.name}
                className={`bg-gradient-to-br ${group.color} rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start mb-6">
                  <div className={`${group.iconBg} w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                    <span className="text-white text-2xl font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      {group.name}
                    </h2>
                    <p className="text-lg text-gray-700">{group.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {group.remedies.map((remedy) => (
                    <div key={remedy.name} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <h3 className="font-bold text-gray-900 mb-1">{remedy.name}</h3>
                      <p className="text-sm text-gray-600">{remedy.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
