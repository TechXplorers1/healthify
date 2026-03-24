export const CLINICS = [
    {
        id: 1,
        name: 'City Care Hospital',
        type: 'Hospital',
        location: '123 Downtown Ave, San Francisco, CA',
        contact: '+1 (555) 123-4567',
        tokenPrice: 50,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        doctorName: 'Dr. Sarah Jenkins',
        specialties: ['General Medicine', 'Internal Medicine', 'Cardiology', 'Heart']
    },
    {
        id: 2,
        name: 'Sunrise Dental Clinic',
        type: 'Clinic',
        location: '45 Sunshine Blvd, Los Angeles, CA',
        contact: '+1 (555) 987-6543',
        tokenPrice: 30,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        doctorName: 'Dr. Michael Chen',
        specialties: ['Dentistry', 'Orthodontics', 'Teeth']
    },
    {
        id: 3,
        name: 'Evergreen Family Medicine',
        type: 'Clinic',
        location: '789 Pine St, Seattle, WA',
        contact: '+1 (555) 555-0199',
        tokenPrice: 40,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        doctorName: 'Dr. Emily Roberts',
        specialties: ['General Medicine', 'Family Medicine', 'Pediatrics']
    },
    {
        id: 4,
        name: 'Fortis Memorial Research Institute',
        type: 'Hospital',
        location: 'Sector - 44, Opposite HUDA City Centre, Gurugram',
        contact: '+91 124 4962200',
        tokenPrice: 1500,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        doctorName: 'Dr. (Col) Manjinder Sandhu',
        specialties: ['Cardiac Sciences', 'Oncology', 'Gastroenterology', 'Neurology', 'Orthopaedics', 'Heart', 'Cancer', 'Brain', 'Stomach']
    },
    {
        id: 5,
        name: 'Fortis Hospital, Noida',
        type: 'Hospital',
        location: 'B-22, Sector 62, Gautam Buddh Nagar, Noida',
        contact: '+91 120 4300222',
        tokenPrice: 1200,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        doctorName: 'Dr. Ajay Agarwal',
        specialties: ['Cardiac Sciences', 'Internal Medicine', 'General Surgery', 'Heart', 'Lungs']
    },
    {
        id: 6,
        name: 'Fortis C-Doc Hospital',
        type: 'Hospital',
        location: 'B-16, Chirag Enclave, New Delhi',
        contact: '+91 11 49101222',
        tokenPrice: 1800,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        doctorName: 'Dr. Anoop Misra',
        specialties: ['Diabetology', 'Endocrinology', 'Diabetes', 'Hormones', 'Metabolic']
    }
];

export const DOCTORS = [
    {
        id: 1,
        name: 'Dr. Anoop Misra',
        title: 'EXECUTIVE CHAIRMAN FORTIS C DOC',
        hospital: 'Fortis C-Doc',
        specialties: ['Diabetology/Endocrinology', 'Endocrinology'],
        experience: '40 Years',
        fees: 2800,
        locations: ['Fortis C-Doc Hospital, New Delhi'],
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        about: 'Prof. (Dr.) Anoop Misra is Chairman, Fortis C-DOC Hospital for Diabetes and Allied Sciences. Director, National Diabetes Obesity and Cholesterol Foundation (NDOC). President, Diabetes Foundation (India). Former Professor (Medicine), AIIMS, New Delhi. Major Achievements: Over 40 years of experience in endocrinology and internal medicine.',
        education: ['MBBS', 'MD (Internal Medicine)'],
        awards: ['Dr. B. C. Roy Award (Highest Indian Medical Award) - 2006', 'Padma Shri (Fourth Highest Civilian Award of India) - 2007']
    },
    {
        id: 2,
        name: 'Dr. (Col) Manjinder Sandhu',
        title: 'PRINCIPAL DIRECTOR CARDIOLOGY',
        hospital: 'Fortis Gurgaon',
        specialties: ['Cardiac Sciences', 'Interventional Cardiology'],
        experience: '35 Years',
        fees: 2000,
        locations: ['Available at 1 different locations', 'Fortis Manesar'],
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        about: 'Dr. (Col) Manjinder Sandhu is the Principal Director of Cardiology at Fortis Gurgaon. He specializes in Complex Angioplasties, Rotablation, and Primary PCI. He has served in the Armed Forces Medical Services and has immense experience in managing complex cardiac emergencies.',
        education: ['MBBS', 'MD (Medicine)', 'DM (Cardiology)'],
        awards: ['Vishisht Seva Medal (VSM) by the President of India', 'Awarded fellowship of American College of Cardiology']
    },
    {
        id: 3,
        name: 'Dr. (Prof.) Amit Javed',
        title: 'PRINCIPAL DIRECTOR & HOD LAP GI, GI ONCO, BARIATRIC & MIS SURGERY',
        hospital: 'Fortis Gurgaon',
        specialties: ['General Surgery', 'Gastroenterology and Hepatobiliary Sciences', 'Oncology'],
        experience: '25 Years',
        fees: 1500,
        locations: ['Fortis Memorial Research Institute, Gurugram'],
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        about: 'Dr. (Prof.) Amit Javed is an internationally acclaimed GI, GI Oncology & Bariatric Surgeon. He has vast experience in performing complex abdominal surgeries laparoscopically with excellent outcomes.',
        education: ['MBBS', 'MS (General Surgery)', 'MCh (Surgical Gastroenterology)'],
        awards: ['Best Surgeon Award by Indian Medical Association', 'Pioneer in Bariatric Surgery Award']
    },
    {
        id: 4,
        name: 'Dr. Ajay Agarwal',
        title: 'CHAIRMAN - INTERNAL MEDICINE',
        hospital: 'Fortis Noida',
        specialties: ['Internal Medicine', 'General Physician'],
        experience: '25 Years',
        fees: 1400,
        locations: ['Fortis Hospital, Noida'],
        image: 'https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=256&auto=format&fit=crop',
        about: 'Dr. Ajay Agarwal is the Chairman of Internal Medicine at Fortis Noida. He brings over 25 years of extensive experience in diagnosing and treating adult diseases with a strong focus on preventive medicine and infectious diseases.',
        education: ['MBBS', 'MD (Internal Medicine)'],
        awards: ['Excellence in Internal Medicine 2018', 'Patient Choice Award 2021']
    },
    {
        id: 5,
        name: 'Dr. Ajay Kaul',
        title: 'CHAIRMAN CARDIAC SCIENCE',
        hospital: 'Fortis Noida',
        specialties: ['Cardiac Sciences', 'Adult CTVS (Cardiothoracic and Vascular Surgery)'],
        experience: '38 Years',
        fees: 1600,
        locations: ['Fortis Hospital, Noida'],
        image: 'https://images.unsplash.com/photo-1594824436998-dd1f7f90f2b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        about: 'Dr. Ajay Kaul is a renowned Cardiac Surgeon with over 38 years of experience. He is a pioneer in Minimally Invasive Cardiac Surgery and Heart Failure Surgery. He has performed over 20,000 cardiac surgeries with excellent outcomes.',
        education: ['MBBS', 'MS (General Surgery)', 'MCh (Cardiothoracic and Vascular Surgery)'],
        awards: ['Lifetime Achievement in Cardiac Surgery', 'Best Cardiac Surgeon National Award']
    },
    {
        id: 6,
        name: 'Dr. Ajay Kumar Kriplani',
        title: 'PRINCIPAL DIRECTOR & HOD LAP GI, GI ONCO, BARIATRIC & MIS SURGERY',
        hospital: 'Fortis Gurgaon',
        specialties: ['General Surgery', 'Gastroenterology and Hepatobiliary Sciences'],
        experience: '42 Years',
        fees: 2500,
        locations: ['Fortis Memorial Research Institute, Gurugram'],
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        about: 'Dr. Ajay Kumar Kriplani is a pioneer of Laparoscopic Surgery in India. With over 40 years of experience, he is globally recognized for teaching and establishing laparoscopic surgery protocols across South Asia.',
        education: ['MBBS', 'MS (General Surgery)', 'FRCS'],
        awards: ['Dr. B. C. Roy National Award', 'Honorary Fellowship - Royal College of Surgeons']
    }
];

export const INITIAL_BOOKINGS = [
    {
        id: 101,
        clinicId: 1,
        clinicName: 'City Care Hospital',
        doctorName: 'Dr. Sarah Jenkins',
        date: '2026-03-10',
        status: 'Upcoming',
        location: '123 Downtown Ave, San Francisco, CA'
    },
    {
        id: 102,
        clinicId: 2,
        clinicName: 'Sunrise Dental Clinic',
        doctorName: 'Dr. Michael Chen',
        date: '2026-02-15',
        status: 'Completed',
        location: '45 Sunshine Blvd, Los Angeles, CA'
    }
];

export const INITIAL_DOCTOR_REQUESTS = [
    {
        id: 201,
        patientName: 'Alice Smith',
        date: '2026-03-12',
        status: 'Pending'
    },
    {
        id: 202,
        patientName: 'Bob Johnson',
        date: '2026-03-14',
        status: 'Pending'
    }
];

export const PATIENT_STORIES = [
    {
        id: 1,
        name: 'Sarah M.',
        treatment: 'Cardiac Surgery',
        hospital: 'Fortis Escorts Heart Institute',
        story: 'The care I received at Fortis was exceptional. Dr. Sandhu and his team made me feel completely at ease before my procedure. The recovery was smooth, and the nursing staff was incredibly attentive.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        rating: 5
    },
    {
        id: 2,
        name: 'David K.',
        treatment: 'Orthopedic Consultation',
        hospital: 'Fortis Memorial Research Institute',
        story: 'After months of joint pain, the specialists here finally diagnosed and treated my condition effectively. The facilities are top-notch and the entire booking process through Healthify was seamless.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        rating: 5
    },
    {
        id: 3,
        name: 'Priya R.',
        treatment: 'Routine Health Checkup',
        hospital: 'City Care Hospital',
        story: 'I booked a comprehensive health checkup package. Everything was well-organized, with zero wait times between tests. The detailed report walk-through with the physician was very helpful.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        rating: 4
    }
];
