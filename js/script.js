const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

  const containerHtml=document.querySelector(".team-container");



  //lo faccio partire da uno cosi non devo modificare il file HTML
  for(let i=1;i<team.length;i++){

  const person=team[i];

  
  // stampo anche in console tutti i dati dei membri 
  for(let k in person){
    console.log(k+":"+person[k]);
  }

  containerHtml.innerHTML +=
    `<div class="team-card">
     <div class="card-image">
      <img src="./img/${team[i].image}" alt="member profile"/>
     </div>
    
     <div class="card-text">
      <h3>${team[i].name}</h3>
      <p>${team[i].role}</p>
    </div>
  </div>  
  `
  }

    