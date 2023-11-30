alert("welcome to LPU Event Calender");
document.addEventListener('DOMContentLoaded', function () {
  const eventsContainer = document.getElementById('events');

  // Sample event data (you can replace this with real data)
  const events = [
    { date: '2023-11-30', title: 'A Workshop on Introduction to Paraphrasing and its Application in Academic Writing ', description: 'Centre for Professional Enhancement is going to conduct “A Workshop on Introduction to Paraphrasing and its Application in Academic Writing”.The workshop emphasizes on giving students training about the Paraphrasing - the process of rephrasing a text in its own words while retaining the original meaning and steps that can be followed to paraphrase effectively and its application in academic writing. This workshop will help the students in strengthening their writing skills. This will increase their confidence to write specific content and by using synonyms, converting voices and citation. The workshop will also give hands-on experience about paraphrasing where students will learn and know its implementation.', dutyleave: 'Yes', timing: '01:00 PM Onwards ', location: 'https://www.google.com/maps/dir//School+of+Mechanical+Engineering+(Block+55),+6PW3%2BR98,+Gurudwara+Rd,+Punjab+144411/@31.2469601,75.7033134,21z/data=!4m8!4m7!1m0!1m5!1m1!1s0x391a5f65748ad8a1:0x7ea84c87953de83a!2m2!1d75.7034572!2d31.2470394?entry=ttu', venue: 'Block 55A-501' },

    { date: '2023-11-30', title: 'Think and Speak- A competitive event on Speaking skill ', description: 'Centre for Professional Enhancement is going to conduct “Think and Speak- A competitive event on Speaking skill”. The event emphasizes giving students a platform to learn and enhance their speaking skills with a focus on language. This competition will help the student’s learning experiences, social interactions, and emotional well-being. It enhances comprehension, engagement, and connection, contributing to a positive and enriching educational journey. This will increase their proficiency in communication and empowers students to express themselves confidently. Through this competition, students will able to convey their ideas, opinions, and emotions with clarity, assertiveness, and authenticity, enhancing their self-confidence and communication skills.', dutyleave: 'Yes', timing: '01:00 PM Onwards ', location: 'https://www.google.com/maps/dir//School+of+Mechanical+Engineering+(Block+55),+6PW3%2BR98,+Gurudwara+Rd,+Punjab+144411/@31.2469601,75.7033134,21z/data=!4m8!4m7!1m0!1m5!1m1!1s0x391a5f65748ad8a1:0x7ea84c87953de83a!2m2!1d75.7034572!2d31.2470394?entry=ttu', venue: 'Block 55A-503' },

    { date: '2023-12-01', title: 'Storyworld: A workshop on Short Story writing', description: 'Centre for Professional Enhancement is going to conduct “Storyworld: A workshop on Short Story writing”.The workshop is centred around the art of crafting short stories.The primary focus of this workshop is to nurture and enhance the participants creative writing abilities, while also fostering their imaginative prowess. This endeavour aims to instil in students the skill of organizing their thoughts cohesively and expressing them with clarity and precision, as they become acquainted with the concise and impactful style inherent to short story composition. This particular form of literary expression will impart the invaluable lesson of conveying profound narratives within the constraints of brevity, making it a highly suitable exercise for those seeking to refine their storytelling aptitude.Moreover, It also promises to provide students with a hands-on opportunity to refine their vocabulary and grammar. Through engaging in the exchange of various narratives and dialogues with their peers, they will be able to fine-tune their language skills and grammatical proficiency', dutyleave: 'Yes', timing: '05:00 Onwards', location: 'https://www.google.com/maps/dir//7P34%2BQ6W+Lovely+School+of+Business,+Kapurthala,+Punjab+144601/@31.2545606,75.7050547,19.18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x391a5f670c8eb847:0x9abfae49e37f91c9!2m2!1d75.7055912!2d31.2544909?entry=ttu', venue: 'Block 14-101L' },


    // Add more events here by format given below
    // { date: '', title: '', description: '', dutyleave: '', timing: '', location: '', venue: '' },
  ];

  // Function to display events
  function displayEvents() {
    eventsContainer.innerHTML = ''; // Clear previous events

    events.forEach(event => {
      const eventElement = document.createElement('div');
      eventElement.classList.add('event');
      const eventDate = new Date(event.date);
      const formattedDate = eventDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

      eventElement.innerHTML = `
        <div class='e1'>
       <p class='date'><h2> ${formattedDate}</h2></p>
         
        <p class='title'> ${event.title}</p>
         
         <p class='description'>${event.description}</p>
         
         <p class="dl">Duty Leave:${event.dutyleave}</p>
         
         <p class="time"><img src='https://th.bing.com/th/id/OIP.z1QT7_XPt3d0ympQwdTrZgHaHa?rs=1&pid=ImgDetMain' width='25' height='25' alter='Timing|'>${event.timing}</p>
        
         <p class='location'><a target='_blank' href="${event.location}"><img src='https://1.bp.blogspot.com/-nO3qPOtQJ-A/Xwo_LZEYCBI/AAAAAAAABAU/KDoOKCEW7UYWLsdqqKYwk6D8of93VapgACLcBGAsYHQ/s2048/location%2Bicon.png' width='25' height='25' alter='Venue|'>${event.venue}</a></p>
        
         <p class='details'><a target="_blank" href="https://ums.lpu.in/lpuums/LoginNew.aspx">click here for more details</a></p></div> 
        

         `;


      eventsContainer.appendChild(eventElement);
    });
  }

  displayEvents();
});
