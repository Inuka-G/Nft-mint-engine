import React from 'react';

const Roadmap = () => {
  const roadmapData = [
    {
      title: 'Phase 1: Launch',
      description: 'Release the first set of 1,000 NFTs to the community.',
      icon: '/icons/launch.svg', // Replace with your icon URL
    },
    {
      title: 'Phase 2: Community Building',
      description: 'Host AMAs and create Discord channels for NFT holders.',
      icon: '/icons/community.svg',
    },
    {
      title: 'Phase 3: Partnerships',
      description: 'Collaborate with popular artists and brands to grow the collection.',
      icon: '/icons/partnerships.svg',
    },
    {
      title: 'Phase 4: Exclusive Benefits',
      description: 'Provide NFT holders access to exclusive merchandise and events.',
      icon: '/icons/benefits.svg',
    },
    {
      title: 'Phase 5: Metaverse Integration',
      description: 'Introduce the NFTs as avatars in a virtual metaverse space.',
      icon: '/icons/metaverse.svg',
    },
  ];

  return (
    <section className="roadmap-section bg-base-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">NFT Collection Roadmap</h2>
        <div className="roadmap">
          {roadmapData.map((phase, index) => (
            <div
              key={index}
              className="roadmap-item flex items-center gap-6 mb-8 bg-white shadow-md p-6 rounded-lg"
            >
              <div className="icon-container">
                <img
                  src={phase.icon}
                  alt={`${phase.title} icon`}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{phase.title}</h3>
                <p className="text-gray-700">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
