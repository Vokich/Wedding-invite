import { useState } from 'react';

export default function Footer(){
    const [guestResponse, setGuestResponse] = useState({
    guestName: '',
    preferences: { vine: false, vodka: false, cognac: false },
    });

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setGuestResponse(prev => ({ ...prev, guestName: event.target.value }));
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = event.target;
      setGuestResponse(prev => ({
        ...prev,
        preferences: { ...prev.preferences, [name]: checked }
      }));
    };

    const handleFormSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      if (!guestResponse.guestName) {
        alert("Пожалуйста, укажите ваше имя.");
        return;
      }
      console.log("Ответ гостя:", guestResponse);
      alert(`Спасибо, ${guestResponse.guestName}! Ваша анкета принята.`);
    };
  
    return(
        <footer>
        <div className='form-section'>
            <div className='form-background'> 
              <h1>АНКЕТА</h1>
              <form onSubmit={handleFormSubmit}>
                <p>Пожалуйста, подтвердите ваше присутствие<br/> 
                и выберите предпочтения,<br/> 
                чтобы мы могли сделать вечер еще лучше!</p>
                <div className="form-group">
                  <label htmlFor="guestName">Ваше Имя и Фамилия:</label>
                  <input 
                    type="text" 
                    id="guestName"
                    value={guestResponse.guestName}
                    onChange={handleNameChange}
                    placeholder="Например, Иван Иванов"
                    required 
                  />
                </div>
                <fieldset className="form-group">
                  <legend>Предпочтения по напиткам:</legend>
                  <div className="checkbox-group">
                    <label>
                      <input 
                        type="checkbox" 
                        name="vine"
                        checked={guestResponse.preferences.vine}
                        onChange={handleCheckboxChange}
                      /> 
                      Вино
                    </label>
                    <label>
                      <input 
                        type="checkbox" 
                        name="vodka"
                        checked={guestResponse.preferences.vodka}
                        onChange={handleCheckboxChange}
                      /> 
                      Водка
                    </label>
                    <label>
                      <input 
                        type="checkbox" 
                        name="cognac"
                        checked={guestResponse.preferences.cognac}
                        onChange={handleCheckboxChange}
                      /> 
                      Коньяк
                    </label>
                  </div>
                </fieldset>
                <button type="submit" className="submit-button">Отправить анкету</button>
              </form>
            </div>
          </div>
          
          <div className='contact-div'>
            <h1>КАК СВЯЗАТЬСЯ?</h1>
            <h3>КОНТАКТЫ НЕВЕСТЫ: +7-000-000-00-00</h3>
            <h3>КОНТАКТЫ ЖЕНИХА: +7-000-000-00-00</h3>
          </div>
        </footer>
    )
}
