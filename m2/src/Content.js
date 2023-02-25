import './Content.css';
import{ useState } from 'react';

const Content = () =>{
		const [nameTest, setName] = useState ('Wd42P 123');

		const [count, setCount] = useState(0);

    const handleNameChanges = () => {
        const names = ['bob', 'juan', 'peter'];
        const int = Math.floor(Math.random() * 3);
        // return names[int];
				setName(names[int]);
      }

		const handleClick = () => {
			setCount(count + 1);
			// console.log('You clicked it');
		}

		const handleClick2 = (name) => {
			setCount(count + 1);
			// console.log(name);
		}

		const handleClick3 = (e) => {
			setCount(count + 1);
			// console.log(e);
			// console.log(e.target.innerText);
		}

		
    return(
        <main>
            <p onDoubleClick={handleClick} className='mysample'>
            {nameTest}<br/>
						{count}
            </p>

						<button onClick={handleNameChanges}>Change Name</button><br/><br/>

						<button onClick={handleClick}>Button One</button>
						<button onClick={ () => handleClick2 ('bob')}>Button Two</button>
						<button onClick={ (e) => handleClick3 (e)}>Button Three 123</button>
        </main>
    )
}

export default Content;