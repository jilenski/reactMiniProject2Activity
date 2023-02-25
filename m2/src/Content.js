import './App.css';
import{ useState } from 'react';
import './assets/dist/css/bootstrap.min.css';

const Content = () =>{
		const [nameTest, setName] = useState ('Wd42P 123');

		const [count, setCount] = useState(0);

    const handleNameChanges = () => {
        const names = ['Bob', 'Juan', 'Peter'];
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
        <main className="px-3">
            <p onDoubleClick={handleClick} className='lead mysample'>
            {nameTest}<br/>
						{count}
            </p>

						<button className="btn btn-lg btn-light fw-bold border-white bg-white" onClick={handleNameChanges}>Change Name</button><br/><br/>

						<button className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" onClick={handleClick}>Button One</button>
						<button className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" onClick={ () => handleClick2 ('bob')}>Button Two</button>
						<button className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" onClick={ (e) => handleClick3 (e)}>Button Three 123</button>
        </main>
    )
}

export default Content;