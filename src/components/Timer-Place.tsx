import { useState, useEffect } from 'react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function TimerPlace(){
    const targetDate = '2025-09-15T12:00:00';
      const calculateTimeLeft = (): TimeLeft | null => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft: TimeLeft | null = null;
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
      }, [targetDate]); 
      const formatNumber = (num: number) => num.toString().padStart(2, '0');
    
    return(
        <>
        <div className='timer-div'>
            <h1>ДО СВАДЬБЫ ОСТАЛОСЬ...</h1>
              {timeLeft ? (
              <div className="countdown-timer">
                <div className="timer-block">
                  <span>{formatNumber(timeLeft.days)}</span>
                  <span>Дней</span>
                </div>

                <div className="timer-block">
                  <span>{formatNumber(timeLeft.hours)}</span>
                  <span>Часов</span>
                </div>

                <div className="timer-block">
                  <span>{formatNumber(timeLeft.minutes)}</span>
                  <span>Минут</span>
                </div>

                <div className="timer-block">
                  <span>{formatNumber(timeLeft.seconds)}</span>
                  <span>Секунд</span>
                </div>
              </div>
            ) : (
              <h2>Событие наступило!</h2>
            )}
          </div>

          <div className='place-wedd-div'>
            <h1>МЕСТО ПРОВЕДЕНИЯ</h1>
            <h2>Кафе у моря 'Гранд'</h2>
            <a 
              href="https://yandex.ru/maps/-/CDuAXB3A" 
              className='map-link' 
              target="_blank" 
              rel="noopener noreferrer"
            >
            Местоположение ресторана
            </a>
          </div>
        </>
    )
}