import './Content.css';

const Content = () =>{

    const handleNameChanges = () => {
        const names = ['bob', 'juan', 'peter'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
      }

    return(
        <main>
            <p className='mysample'>
                Hello {handleNameChanges()} !
            </p>
        </main>
    )
}

export default Content;