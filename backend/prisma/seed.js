const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create organizers
  const organizer1 = await prisma.organizer.create({
    data: {
      name: 'Brilliant Company',
    },
  });

  const organizer2 = await prisma.organizer.create({
    data: {
      name: 'Eventive',
    },
  });

  // Create events
  const event1 = await prisma.event.create({
    data: {
      title: 'Global Business Summit',
      description:
        'An annual gathering of top executives and thought leaders to discuss global market trends and business strategies.',
      date: new Date(),
      organizerId: organizer1.id,
    },
  });

  const event2 = await prisma.event.create({
    data: {
      title: 'Innovation and Technology Conference',
      description:
        'A conference showcasing the latest technological advancements and innovative solutions across various industries.',
      date: new Date(),
      organizerId: organizer2.id,
    },
  });

  const event3 = await prisma.event.create({
    data: {
      title: 'Annual Sales Kickoff',
      description:
        'A motivational event to align sales teams with company goals and strategies for the upcoming fiscal year.',
      date: new Date(),
      organizerId: organizer2.id,
    },
  });

  const event4 = await prisma.event.create({
    data: {
      title: 'Leadership Retreat',
      description:
        'An exclusive retreat designed for senior executives to develop leadership skills and network with peers.',
      date: new Date(),
      organizerId: organizer2.id,
    },
  });

  const event5 = await prisma.event.create({
    data: {
      title: 'Customer Experience Expo',
      description:
        'An expo focused on improving customer satisfaction and loyalty through innovative practices and technologies.',
      date: new Date(),
      organizerId: organizer2.id,
    },
  });

  const event6 = await prisma.event.create({
    data: {
      title: 'Corporate Social Responsibility Forum',
      description:
        'A forum dedicated to discussing sustainable business practices and corporate social responsibility initiatives.',
      date: new Date(),
      organizerId: organizer2.id,
    },
  });

  const event7 = await prisma.event.create({
    data: {
      title: 'Fairytale Romance Wedding',
      description:
        'A magical wedding inspired by classic fairytales, complete with enchanting decor and whimsical touches.',
      date: new Date(),
      organizerId: organizer2.id,
    },
  });

  const event8 = await prisma.event.create({
    data: {
      title: 'Eco-Friendly Conference',
      description: 'A conference focused on sustainability and eco-friendly practices.',
      date: new Date(),
      organizerId: organizer1.id,
    },
  });
  
  const event9 = await prisma.event.create({
    data: {
      title: 'Tech Startup Expo',
      description: 'An expo showcasing the latest innovations in technology startups.',
      date: new Date(),
      organizerId: organizer1.id,
    },
  });
  
  const event10 = await prisma.event.create({
    data: {
      title: 'Fitness Bootcamp',
      description: 'A high-intensity fitness bootcamp to help you reach your fitness goals.',
      date: new Date(),
      organizerId: organizer2.id,
    },
  });
  
  const event11 = await prisma.event.create({
    data: {
      title: 'Artisanal Food Festival',
      description: 'A festival celebrating artisanal food and culinary craftsmanship.',
      date: new Date(),
      organizerId: organizer2.id,
    },
  });

  // Create participants
  const participant1 = await prisma.participant.create({
    data: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      birthDate: '1990-01-01',
      source: 'friends',
      eventId: event1.id,
      createdAt: "2024-05-01T00:00:00.000Z"
    },
  });
  
  const participant2 = await prisma.participant.create({
    data: {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@example.com',
      birthDate: '1995-01-01',
      source: 'soc-media',
      eventId: event1.id,
      createdAt: "2024-05-01T00:00:00.000Z"
    },
  });
  
  const participant3 = await prisma.participant.create({
    data: {
      firstName: 'Emily',
      lastName: 'Smith',
      email: 'emily.smith@example.com',
      birthDate: '1988-04-12',
      source: 'soc-media',
      eventId: event1.id,
      createdAt: "2024-05-01T00:00:00.000Z"

    },
  });
  
  const participant4 = await prisma.participant.create({
    data: {
      firstName: 'Michael',
      lastName: 'Johnson',
      email: 'michael.johnson@example.com',
      birthDate: '1979-11-23',
      source: 'soc-media',
      eventId: event1.id,
      createdAt: "2024-05-01T00:00:00.000Z"

    },
  });
  
  const participant5 = await prisma.participant.create({
    data: {
      firstName: 'Sophia',
      lastName: 'Brown',
      email: 'sophia.brown@example.com',
      birthDate: '1995-07-30',
      source: 'soc-media',
      eventId: event1.id,
      createdAt: "2024-05-02T00:00:00.000Z"

    },
  });
  
  const participant6 = await prisma.participant.create({
    data: {
      firstName: 'James',
      lastName: 'Williams',
      email: 'james.williams@example.com',
      birthDate: '1982-03-15',
      source: 'soc-media',
      eventId: event1.id,
      createdAt: "2024-05-01T00:00:00.000Z" 

    },
  });
  
  const participant7 = await prisma.participant.create({
    data: {
      firstName: 'Olivia',
      lastName: 'Jones',
      email: 'olivia.jones@example.com',
      birthDate: '1991-09-25',
      source: 'soc-media',
      eventId: event1.id,
      createdAt: "2024-05-04T00:00:00.000Z" 

    },
  });
  
  const participant8 = await prisma.participant.create({
    data: {
      firstName: 'David',
      lastName: 'Miller',
      email: 'david.miller@example.com',
      birthDate: '1985-05-06',
      source: 'soc-media',
      eventId: event1.id,
      createdAt: "2024-05-04T00:00:00.000Z" 
    },
  });
  
  const participant9 = await prisma.participant.create({
    data: {
      firstName: 'Ava',
      lastName: 'Davis',
      email: 'ava.davis@example.com',
      birthDate: '1993-12-17',
      source: 'soc-media',
      eventId: event1.id,
      createdAt: "2024-05-05T00:00:00.000Z" 
    },
  });
  
  const participant10 = await prisma.participant.create({
    data: {
      firstName: 'Christopher',
      lastName: 'Garcia',
      email: 'christopher.garcia@example.com',
      birthDate: '1978-08-01',
      source: 'soc-media',
      eventId: event1.id,
      createdAt: "2024-05-20T00:00:00.000Z" 
    },
  });
  
  const participant11 = await prisma.participant.create({
    data: {
      firstName: 'Isabella',
      lastName: 'Martinez',
      email: 'isabella.martinez@example.com',
      birthDate: '1996-02-10',
      source: 'soc-media',
      eventId: event1.id,
      createdAt: "2024-05-20T00:00:00.000Z" 
    },
  });
  
  const participant12 = await prisma.participant.create({
    data: {
      firstName: 'Daniel',
      lastName: 'Rodriguez',
      email: 'daniel.rodriguez@example.com',
      birthDate: '1983-06-21',
      source: 'soc-media',
      eventId: event1.id,
      createdAt: "2024-05-20T00:00:00.000Z" 
    },
  });
  
  const participant13 = await prisma.participant.create({
    data: {
      firstName: 'Mia',
      lastName: 'Hernandez',
      email: 'mia.hernandez@example.com',
      birthDate: '1992-10-05',
      source: 'soc-media',
      eventId: event1.id,
      createdAt: "2024-05-18T00:00:00.000Z" 
    },
  });
  
  const participant14 = await prisma.participant.create({
    data: {
      firstName: 'Matthew',
      lastName: 'Martinez',
      email: 'matthew.martinez@example.com',
      birthDate: '1987-04-19',
      source: 'soc-media',
      eventId: event2.id,
      createdAt: "2024-05-17T00:00:00.000Z" 
    },
  });
  
  const participant15 = await prisma.participant.create({
    data: {
      firstName: 'Amelia',
      lastName: 'Lopez',
      email: 'amelia.lopez@example.com',
      birthDate: '1994-11-08',
      source: 'soc-media',
      eventId: event2.id,
    },
  });
  
  const participant16 = await prisma.participant.create({
    data: {
      firstName: 'Joshua',
      lastName: 'Gonzalez',
      email: 'joshua.gonzalez@example.com',
      birthDate: '1989-01-28',
      source: 'soc-media',
      eventId: event2.id,
      createdAt: "2024-05-17T00:00:00.000Z" 
    },
  });
  
  const participant17 = await prisma.participant.create({
    data: {
      firstName: 'Charlotte',
      lastName: 'Wilson',
      email: 'charlotte.wilson@example.com',
      birthDate: '1990-03-11',
      source: 'soc-media',
      eventId: event3.id,
    },
  });

  const participant18 = await prisma.participant.create({
    data: {
      firstName: 'James',
      lastName: 'Brown',
      email: 'james.brown@example.com',
      birthDate: '1985-07-23',
      source: 'email',
      eventId: event1.id,
    },
  });
  
  const participant19 = await prisma.participant.create({
    data: {
      firstName: 'Sophia',
      lastName: 'Smith',
      email: 'sophia.smith@example.com',
      birthDate: '1992-05-15',
      source: 'referral',
      eventId: event2.id,
    },
  });
  
  const participant20 = await prisma.participant.create({
    data: {
      firstName: 'Liam',
      lastName: 'Johnson',
      email: 'liam.johnson@example.com',
      birthDate: '1988-11-30',
      source: 'website',
      eventId: event1.id,
      createdAt: "2024-05-17T00:00:00.000Z" 
    },
  });
  
  const participant21 = await prisma.participant.create({
    data: {
      firstName: 'Emma',
      lastName: 'Williams',
      email: 'emma.williams@example.com',
      birthDate: '1993-04-22',
      source: 'friends',
      eventId: event3.id,
    },
  });
  
  const participant22 = await prisma.participant.create({
    data: {
      firstName: 'Olivia',
      lastName: 'Jones',
      email: 'olivia.jones@example.com',
      birthDate: '1995-02-19',
      source: 'email',
      eventId: event4.id,
    },
  });
  
  const participant23 = await prisma.participant.create({
    data: {
      firstName: 'Noah',
      lastName: 'Garcia',
      email: 'noah.garcia@example.com',
      birthDate: '1991-08-10',
      source: 'soc-media',
      eventId: event2.id,
    },
  });
  
  const participant24 = await prisma.participant.create({
    data: {
      firstName: 'Ava',
      lastName: 'Martinez',
      email: 'ava.martinez@example.com',
      birthDate: '1989-01-07',
      source: 'referral',
      eventId: event3.id,
    },
  });
  
  const participant25 = await prisma.participant.create({
    data: {
      firstName: 'Elijah',
      lastName: 'Davis',
      email: 'elijah.davis@example.com',
      birthDate: '1990-06-14',
      source: 'friends',
      eventId: event4.id,
    },
  });
  
  const participant26 = await prisma.participant.create({
    data: {
      firstName: 'Isabella',
      lastName: 'Rodriguez',
      email: 'isabella.rodriguez@example.com',
      birthDate: '1987-03-25',
      source: 'email',
      eventId: event2.id,
    },
  });
  
  const participant27 = await prisma.participant.create({
    data: {
      firstName: 'Mason',
      lastName: 'Lopez',
      email: 'mason.lopez@example.com',
      birthDate: '1994-12-16',
      source: 'website',
      eventId: event1.id,
      createdAt: "2024-05-17T00:00:00.000Z" 
    },
  });
  
  const participant28 = await prisma.participant.create({
    data: {
      firstName: 'Mia',
      lastName: 'Gonzalez',
      email: 'mia.gonzalez@example.com',
      birthDate: '1986-09-30',
      source: 'soc-media',
      eventId: event3.id,
      createdAt: "2024-05-17T00:00:00.000Z" 
    },
  });
  
  const participant29 = await prisma.participant.create({
    data: {
      firstName: 'Logan',
      lastName: 'Wilson',
      email: 'logan.wilson@example.com',
      birthDate: '1991-11-11',
      source: 'referral',
      eventId: event2.id,
      createdAt: "2024-05-19T00:00:00.000Z" 
    },
  });
  
  const participant30 = await prisma.participant.create({
    data: {
      firstName: 'Amelia',
      lastName: 'Anderson',
      email: 'amelia.anderson@example.com',
      birthDate: '1992-07-28',
      source: 'friends',
      eventId: event4.id,
    },
  });
  
  const participant31 = await prisma.participant.create({
    data: {
      firstName: 'Ethan',
      lastName: 'Thomas',
      email: 'ethan.thomas@example.com',
      birthDate: '1993-05-14',
      source: 'email',
      eventId: event1.id,
      createdAt: "2024-05-19T00:00:00.000Z" 
    },
  });
  
  const participant32 = await prisma.participant.create({
    data: {
      firstName: 'Harper',
      lastName: 'Taylor',
      email: 'harper.taylor@example.com',
      birthDate: '1988-04-08',
      source: 'website',
      eventId: event2.id,
      createdAt: "2024-05-19T00:00:00.000Z" 
    },
  });
  
  const participant33 = await prisma.participant.create({
    data: {
      firstName: 'Alexander',
      lastName: 'Hernandez',
      email: 'alexander.hernandez@example.com',
      birthDate: '1985-10-21',
      source: 'soc-media',
      eventId: event3.id,
      createdAt: "2024-05-19T00:00:00.000Z" 
    },
  });
  
  const participant34 = await prisma.participant.create({
    data: {
      firstName: 'Evelyn',
      lastName: 'Moore',
      email: 'evelyn.moore@example.com',
      birthDate: '1994-01-17',
      source: 'referral',
      eventId: event4.id,
      createdAt: "2024-08-11T00:00:00.000Z" 

    },
  });
  
  const participant35 = await prisma.participant.create({
    data: {
      firstName: 'Daniel',
      lastName: 'Jackson',
      email: 'daniel.jackson@example.com',
      birthDate: '1990-08-03',
      source: 'friends',
      eventId: event2.id,
    },
  });
  
  const participant36 = await prisma.participant.create({
    data: {
      firstName: 'Sofia',
      lastName: 'Martin',
      email: 'sofia.martin@example.com',
      birthDate: '1991-06-09',
      source: 'email',
      eventId: event3.id,
      createdAt: "2024-08-11T00:00:00.000Z" 
    },
  });
  
  const participant37 = await prisma.participant.create({
    data: {
      firstName: 'Jacob',
      lastName: 'Lee',
      email: 'jacob.lee@example.com',
      birthDate: '1987-02-13',
      source: 'website',
      eventId: event4.id,
    },
  });
  
  const participant38 = await prisma.participant.create({
    data: {
      firstName: 'Scarlett',
      lastName: 'Perez',
      email: 'scarlett.perez@example.com',
      birthDate: '1989-12-25',
      source: 'soc-media',
      eventId: event2.id,
    },
  });
  
  const participant39 = await prisma.participant.create({
    data: {
      firstName: 'Henry',
      lastName: 'Thompson',
      email: 'henry.thompson@example.com',
      birthDate: '1993-11-07',
      source: 'referral',
      eventId: event1.id,
    },
  });
  
  const participant40 = await prisma.participant.create({
    data: {
      firstName: 'Grace',
      lastName: 'White',
      email: 'grace.white@example.com',
      birthDate: '1986-05-27',
      source: 'friends',
      eventId: event3.id,
      createdAt: "2024-08-11T00:00:00.000Z" 

    },
  });
  
  const participant41 = await prisma.participant.create({
    data: {
      firstName: 'Michael',
      lastName: 'Harris',
      email: 'michael.harris@example.com',
      birthDate: '1992-03-30',
      source: 'email',
      eventId: event2.id,
    },
  });
  
  const participant42 = await prisma.participant.create({
    data: {
      firstName: 'Ella',
      lastName: 'Sanchez',
      email: 'ella.sanchez@example.com',
      birthDate: '1990-10-18',
      source: 'website',
      eventId: event4.id,
    },
  });
  
  const participant43 = await prisma.participant.create({
    data: {
      firstName: 'Benjamin',
      lastName: 'Clark',
      email: 'benjamin.clark@example.com',
      birthDate: '1988-09-12',
      source: 'soc-media',
      eventId: event3.id,
    },
  });
  
  const participant44 = await prisma.participant.create({
    data: {
      firstName: 'Avery',
      lastName: 'Ramirez',
      email: 'avery.ramirez@example.com',
      birthDate: '1991-04-03',
      source: 'referral',
      eventId: event1.id,
    },
  });
  
  const participant45 = await prisma.participant.create({
    data: {
      firstName: 'Lucas',
      lastName: 'Lewis',
      email: 'lucas.lewis@example.com',
      birthDate: '1995-06-24',
      source: 'friends',
      eventId: event2.id,
    },
  });
  
  const participant46 = await prisma.participant.create({
    data: {
      firstName: 'Aria',
      lastName: 'Robinson',
      email: 'aria.robinson@example.com',
      birthDate: '1986-07-19',
      source: 'email',
      eventId: event3.id,
      createdAt: "2024-08-11T00:00:00.000Z" 
    },
  });
  
  const participant47 = await prisma.participant.create({
    data: {
      firstName: 'Sebastian',
      lastName: 'Walker',
      email: 'sebastian.walker@example.com',
      birthDate: '1987-12-29',
      source: 'website',
      eventId: event4.id,
    },
  });
  
  const participant48 = await prisma.participant.create({
    data: {
      firstName: 'Chloe',
      lastName: 'Young',
      email: 'chloe.young@example.com',
      birthDate: '1990-01-01',
      source: 'soc-media',
      eventId: event2.id,
    },
  });
  
  const participant49 = await prisma.participant.create({
    data: {
      firstName: 'Jack',
      lastName: 'Allen',
      email: 'jack.allen@example.com',
      birthDate: '1994-04-11',
      source: 'referral',
      eventId: event3.id,
    },
  });
  
  const participant50 = await prisma.participant.create({
    data: {
      firstName: 'Layla',
      lastName: 'King',
      email: 'layla.king@example.com',
      birthDate: '1989-08-20',
      source: 'friends',
      eventId: event1.id,
    },
  });
  
  const participant51 = await prisma.participant.create({
    data: {
      firstName: 'David',
      lastName: 'Wright',
      email: 'david.wright@example.com',
      birthDate: '1992-02-14',
      source: 'email',
      eventId: event4.id,
      createdAt: "2024-08-11T00:00:00.000Z" 
    },
  });
  
  const participant52 = await prisma.participant.create({
    data: {
      firstName: 'Mila',
      lastName: 'Scott',
      email: 'mila.scott@example.com',
      birthDate: '1987-11-22',
      source: 'website',
      eventId: event3.id,
    },
  });
  
  const participant53 = await prisma.participant.create({
    data: {
      firstName: 'Matthew',
      lastName: 'Green',
      email: 'matthew.green@example.com',
      birthDate: '1986-06-17',
      source: 'soc-media',
      eventId: event2.id,
      createdAt: "2024-05-15T00:00:00.000Z" 
    },
  });
  
  const participant54 = await prisma.participant.create({
    data: {
      firstName: 'Zoe',
      lastName: 'Baker',
      email: 'zoe.baker@example.com',
      birthDate: '1991-09-05',
      source: 'referral',
      eventId: event1.id,
      createdAt: "2024-05-15T00:00:00.000Z" 
    },
  });
  
  const participant55 = await prisma.participant.create({
    data: {
      firstName: 'Ryan',
      lastName: 'Adams',
      email: 'ryan.adams@example.com',
      birthDate: '1985-12-13',
      source: 'friends',
      eventId: event4.id,
    },
  });
  
  const participant56 = await prisma.participant.create({
    data: {
      firstName: 'Ella',
      lastName: 'Nelson',
      email: 'ella.nelson@example.com',
      birthDate: '1990-03-29',
      source: 'email',
      eventId: event2.id,
      createdAt: "2024-05-15T00:00:00.000Z" 
    },
  });
  
  const participant57 = await prisma.participant.create({
    data: {
      firstName: 'Jackson',
      lastName: 'Carter',
      email: 'jackson.carter@example.com',
      birthDate: '1994-10-08',
      source: 'website',
      eventId: event3.id,
      createdAt: "2024-05-15T00:00:00.000Z" 
    },
  });
  
  const participant58 = await prisma.participant.create({
    data: {
      firstName: 'Grace',
      lastName: 'Mitchell',
      email: 'grace.mitchell@example.com',
      birthDate: '1988-04-05',
      source: 'soc-media',
      eventId: event5.id,
      createdAt: "2024-05-15T00:00:00.000Z" 
    },
  });
  
  const participant59 = await prisma.participant.create({
    data: {
      firstName: 'Oliver',
      lastName: 'Perez',
      email: 'oliver.perez@example.com',
      birthDate: '1987-08-27',
      source: 'referral',
      eventId: event6.id,
      createdAt: "2024-05-15T00:00:00.000Z" 
    },
  });
  
  const participant60 = await prisma.participant.create({
    data: {
      firstName: 'Aubrey',
      lastName: 'Roberts',
      email: 'aubrey.roberts@example.com',
      birthDate: '1993-11-30',
      source: 'friends',
      eventId: event7.id,
      createdAt: "2024-05-15T00:00:00.000Z" 
    },
  });
  
  const participant61 = await prisma.participant.create({
    data: {
      firstName: 'Samuel',
      lastName: 'Turner',
      email: 'samuel.turner@example.com',
      birthDate: '1989-02-23',
      source: 'email',
      eventId: event3.id,
    },
  });
  
  const participant62 = await prisma.participant.create({
    data: {
      firstName: 'Victoria',
      lastName: 'Phillips',
      email: 'victoria.phillips@example.com',
      birthDate: '1990-05-09',
      source: 'website',
      eventId: event11.id,
      createdAt: "2024-05-15T00:00:00.000Z" 
    },
  });
  
  const participant63 = await prisma.participant.create({
    data: {
      firstName: 'Daniel',
      lastName: 'Campbell',
      email: 'daniel.campbell@example.com',
      birthDate: '1985-07-15',
      source: 'soc-media',
      eventId: event10.id,
      createdAt: "2024-05-15T00:00:00.000Z" 
    },
  });
  
  const participant64 = await prisma.participant.create({
    data: {
      firstName: 'Lily',
      lastName: 'Parker',
      email: 'lily.parker@example.com',
      birthDate: '1992-01-18',
      source: 'referral',
      eventId: event4.id,
      createdAt: "2024-05-15T00:00:00.000Z" 
    },
  });
  
  const participant65 = await prisma.participant.create({
    data: {
      firstName: 'Henry',
      lastName: 'Evans',
      email: 'henry.evans@example.com',
      birthDate: '1991-09-03',
      source: 'friends',
      eventId: event3.id,
      createdAt: "2024-08-13T00:00:00.000Z" 
    },
  });
  
  const participant66 = await prisma.participant.create({
    data: {
      firstName: 'Penelope',
      lastName: 'Collins',
      email: 'penelope.collins@example.com',
      birthDate: '1988-11-07',
      source: 'email',
      eventId: event5.id,
      createdAt: "2024-08-13T00:00:00.000Z" 
    },
  });
  
  const participant67 = await prisma.participant.create({
    data: {
      firstName: 'Julian',
      lastName: 'Stewart',
      email: 'julian.stewart@example.com',
      birthDate: '1994-02-19',
      source: 'website',
      eventId: event6.id,
      createdAt: "2024-08-13T00:00:00.000Z" 
    },
  });
  
  const participant68 = await prisma.participant.create({
    data: {
      firstName: 'Zoey',
      lastName: 'Morris',
      email: 'zoey.morris@example.com',
      birthDate: '1990-08-30',
      source: 'soc-media',
      eventId: event8.id,
      createdAt: "2024-08-13T00:00:00.000Z" 
    },
  });
  
  const participant69 = await prisma.participant.create({
    data: {
      firstName: 'Gabriel',
      lastName: 'Murphy',
      email: 'gabriel.murphy@example.com',
      birthDate: '1987-12-12',
      source: 'referral',
      eventId: event3.id,
      createdAt: "2024-08-13T00:00:00.000Z" 
    },
  });
  
  const participant70 = await prisma.participant.create({
    data: {
      firstName: 'Stella',
      lastName: 'Cook',
      email: 'stella.cook@example.com',
      birthDate: '1993-06-24',
      source: 'friends',
      eventId: event7.id,
      createdAt: "2024-08-13T00:00:00.000Z" 
    },
  });
  

  console.log('Example data seeded successfully');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
