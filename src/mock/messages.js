// Vartotojų duomenys
export const users = [
    {
      id: 'user-1',
      name: 'Jonas Jonaitis',
      avatar: '/assets/images/avatar-placeholder.png',
      status: 'online'
    },
    {
      id: 'user-2',
      name: 'Petras Petraitis',
      avatar: '/assets/images/avatar-placeholder.png',
      status: 'online'
    },
    {
      id: 'user-3',
      name: 'Ona Onaitė',
      avatar: '/assets/images/avatar-placeholder.png',
      status: 'offline'
    },
    {
      id: 'user-4',
      name: 'Marija Marijaitė',
      avatar: '/assets/images/avatar-placeholder.png',
      status: 'away'
    }
  ];
  
  // Žinučių duomenys
  export const messages = [
    // Pokalbis su Petru
    {
      id: 'msg-1',
      chatId: 'chat-1',
      senderId: 'user-2',
      text: 'Labas, kaip sekasi projektas?',
      timestamp: '2023-09-01T09:00:00Z',
      read: true
    },
    {
      id: 'msg-2',
      chatId: 'chat-1',
      senderId: 'user-1',
      text: 'Sveiki! Projektas juda į priekį, turiu keletą klausimų.',
      timestamp: '2023-09-01T09:05:00Z',
      read: true
    },
    {
      id: 'msg-3',
      chatId: 'chat-1',
      senderId: 'user-2',
      text: 'Klausiu, kiek dar laiko prireiks iki pirmojo prototipo?',
      timestamp: '2023-09-01T09:10:00Z',
      read: true
    },
    {
      id: 'msg-4',
      chatId: 'chat-1',
      senderId: 'user-1',
      text: 'Manau, apie savaitę laiko. Dar turime išspręsti keletą problemų su API.',
      timestamp: '2023-09-01T09:15:00Z',
      read: true
    },
    {
      id: 'msg-5',
      chatId: 'chat-1',
      senderId: 'user-2',
      text: 'Gerai, lauksiu naujienų. Geros dienos!',
      timestamp: '2023-09-01T09:20:00Z',
      read: true
    },
  
    // Pokalbis su Ona
    {
      id: 'msg-6',
      chatId: 'chat-2',
      senderId: 'user-3',
      text: 'Sveiki, ar jau peržiūrėjote mano pasiūlymus?',
      timestamp: '2023-09-02T10:00:00Z',
      read: true
    },
    {
      id: 'msg-7',
      chatId: 'chat-2',
      senderId: 'user-1',
      text: 'Taip, peržiūrėjau. Turiu keletą pastabų.',
      timestamp: '2023-09-02T10:05:00Z',
      read: true
    },
    {
      id: 'msg-8',
      chatId: 'chat-2',
      senderId: 'user-3',
      text: 'Puiku! Kada galime susitikti aptarti?',
      timestamp: '2023-09-02T10:10:00Z',
      read: false
    },
  
    // Pokalbis su Marija
    {
      id: 'msg-9',
      chatId: 'chat-3',
      senderId: 'user-4',
      text: 'Sveiki! Ar turite minutėlę?',
      timestamp: '2023-09-03T14:00:00Z',
      read: true
    },
    {
      id: 'msg-10',
      chatId: 'chat-3',
      senderId: 'user-1',
      text: 'Taip, kuo galiu padėti?',
      timestamp: '2023-09-03T14:05:00Z',
      read: true
    },
    {
      id: 'msg-11',
      chatId: 'chat-3',
      senderId: 'user-4',
      text: 'Norėčiau pasitarti dėl projekto biudžeto. Atrodo, kad išlaidos viršija planą.',
      timestamp: '2023-09-03T14:10:00Z',
      read: true
    },
    {
      id: 'msg-12',
      chatId: 'chat-3',
      senderId: 'user-1',
      text: 'Supratau. Parengiau naują biudžeto planą, galiu pasidalinti.',
      timestamp: '2023-09-03T14:15:00Z',
      read: true
    },
    {
      id: 'msg-13',
      chatId: 'chat-3',
      senderId: 'user-4',
      text: 'Būtų puiku! Lauksiu.',
      timestamp: '2023-09-03T14:20:00Z',
      read: false
    }
  ];