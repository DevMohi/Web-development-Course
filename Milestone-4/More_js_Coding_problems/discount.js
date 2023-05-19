// 1. if ticketticketQuantitys<100 ticket price: 100
// 2. if ticketticketQuantitys>100 and <200 ticket first 100 tickets will be 1000 and rest will be 90 per piece
//3. If you purchase more than 200 tickets
// first 100 --> 100
// 101-200 -> 90
// 200+ --> 70

function ticketPrice(ticketQuantity) {
  const first100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 70;

  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100Rate;
    return price;
  } else if (ticketQuantity <= 200) {
    const first100price = 100 * first100Rate;
    const restTicketQuantity = ticketQuantity - 100;
    const restTicketPrice = restTicketQuantity * second100Rate;
    const totalPrice = first100price + restTicketPrice;
    return totalPrice;
  } else {
    const first100price = 100 * first100Rate;
    const second100price = 100 * second100Rate;
    const restTicketQuantity = ticketQuantity - 200;
    const restTicketPrice = restTicketQuantity * restTicketRate;
    const totalPrice = first100price + second100price + restTicketPrice;
    return totalPrice;
  }
}

const price = ticketPrice(220);
console.log("price", price);
