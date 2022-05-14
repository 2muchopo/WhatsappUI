import React from 'react'
import '../styles/Main.css'

const Main = () => {

      let  contacts = [
            {name: 'Lionel Messi',
            src: 'https://media.istockphoto.com/photos/success-happens-the-moment-you-believe-it-will-picture-id1262964438?b=1&k=20&m=1262964438&s=170667a&w=0&h=rgmdwXyMrmNuY_3BlmBFI0MdeayurqAjQSvweG4Htso=',
            status: 'online'
            },
            {name: 'Cristiano Ronaldo',
            src: 'https://media.istockphoto.com/photos/happy-successful-young-student-or-freelancer-in-stylish-formal-suit-picture-id1304966864?b=1&k=20&m=1304966864&s=170667a&w=0&h=jit4yFBFo8g5dHhJGAvhL8YZ5gVMDZZZ_HwnOPEksCg=',
            status: 'offline'
            },
            {name: 'Kevin De Bruyne',
            src: 'https://media.istockphoto.com/photos/portrait-of-confident-businessman-picture-id498323227?b=1&k=20&m=498323227&s=170667a&w=0&h=LoBgNryG2sRAXKeFZbA71ozEF4DIFE0LKlste4vPIL4=',
            status: 'online'
            },
            {name: 'Mohammed Salah',
            src: 'https://images.unsplash.com/photo-1504791635568-fa4993808e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eW91bmclMjBtZW4lMjBpbiUyMHN1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
            status: 'offline'
            },
            {name: 'Karim Benzema',
            src: 'https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8eW91bmclMjBtZW4lMjBpbiUyMHN1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
            status: 'online'
            },
            {name: 'Phil Foden',
            src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8eW91bmclMjBtZW4lMjBpbiUyMHN1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
            status: 'online'
            },
            {name: 'Ruben Diaz',
            src: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8eW91bmclMjBtZW4lMjBpbiUyMHN1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
            status: 'offline'
            },
            {name: 'Sadio Mane',
            src: 'https://images.unsplash.com/photo-1514222788835-3a1a1d5b32f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8eW91bmclMjBtZW4lMjBpbiUyMHN1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
            status: 'online'
            },
            {name: 'Ikay Gundogan',
            src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8eW91bmclMjBtZW4lMjBpbiUyMHN1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
            status: 'online'
            },
            {name: 'Riyad Mahrez',
            src: 'https://images.unsplash.com/photo-1515938736719-95b568dc8dd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHlvdW5nJTIwbWVuJTIwaW4lMjBzdWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
            status: 'offline'
            },
        ]

  return (

    
    <div className='main'>
        {contacts.map(function(contact){

        return(
        <div className='single'>
            <div className='image'>
            <img src={contact.src} alt={contact.name} />
            </div>

            <p>{contact.name}</p>
            <div className='stat'>
            <span className={contact.status == 'online'  ? 'online' : 'offline'}>{contact.status}</span>
            </div>
        </div>)
        })}
        
    </div>
  )
}

export default Main