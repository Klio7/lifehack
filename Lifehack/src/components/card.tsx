import Button from "./button";

function Card() {
  return (
    <div className="card_container">
      <h1>Lifehack of the Day</h1>
      <p>
        Положите телефон в режим полёта на 1-2 минуты, а затем включите обратно — это поможет
        ускорить медленное интернет-соединение.
      </p>
      <Button buttonTitle="Share" />
      <Button buttonTitle="Show new lifehack" />
    </div>
  );
}

export default Card;
