import { people } from "../assets/util"
import { Button } from "./Button"

export const Grid = () => {
    return (
        <ul className="people__list">
        {people.map((person, index) => (
          <li key={index} className="person__item">
            <img className="person__image" src={person.image} alt="" />
            <div className="person__data">
              <p className="person__name">{person.name}</p>
              <p className="person__description">{person.case}</p>
              <Button title={"Ver detalles"}/>
              <Button title={"Compartir en redes"}/>
            </div>
          </li>
        ))}
      </ul>
    )
}