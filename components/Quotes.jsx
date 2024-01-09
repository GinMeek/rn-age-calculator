import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

import { getRandomIndex } from "../utils";
import { COLORS, FONT, SIZES } from "../constants";

const motivational_quotes = [
  "Success is not a destination; it's a journey of continuous improvement.",
  "Believe in yourself, and you'll be unstoppable.",
  "Your attitude determines your direction.",
  "Dream big, work hard, stay focused.",
  "Embrace the challenges, for they make victory sweeter.",
  "The only limit to your impact is your imagination.",
  "Every setback is a setup for a comeback.",
  "Strive for progress, not perfection.",
  "Your passion is your power.",
  "The only way to achieve the impossible is to believe it is possible.",
  "Be a voice, not an echo.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "Seeds of doubt grow into trees of failure; plant seeds of belief instead.",
  "It's not about the cards you're dealt but how you play the hand.",
  "Don't be afraid to fail; be afraid not to try.",
  "The secret of getting ahead is getting started.",
  "Hard work beats talent when talent doesn't work hard.",
  "Opportunities don't happen. You create them.",
  "Your time is limited, so don't waste it living someone else's life.",
  "Success is not just about making money; it's about making a difference.",
  "Stay positive, work hard, make it happen.",
  "The only way to do great work is to love what you do.",
  "Success is stumbling from failure to failure with no loss of enthusiasm.",
  "Every accomplishment starts with the decision to try.",
  "Don't watch the clock; do what it does. Keep going.",
  "Challenges are what make life interesting; overcoming them is what makes life meaningful.",
  "Your future is created by what you do today, not tomorrow.",
  "The harder you work, the luckier you get.",
  "Your life does not get better by chance; it gets better by change.",
  "The difference between a stumbling block and a stepping stone is how you use it.",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  "Success is not in what you have, but who you are.",
  "The only person you are destined to become is the person you decide to be.",
  "Do something today that your future self will thank you for.",
  "The more you praise and celebrate your life, the more there is in life to celebrate.",
  "You are never too old to set another goal or to dream a new dream.",
  "Your life is a result of your choices. If you don't like your life, it's time to make better choices.",
  "Great things never come from comfort zones.",
  "Don't wait for the perfect moment; take the moment and make it perfect.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "It always seems impossible until it's done.",
  "Success is not just about reaching the top; it's about helping others climb.",
  "The best way to predict the future is to create it.",
  "The only person you are destined to become is the person you decide to be.",
  "Your attitude determines your altitude.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don't be afraid of change; be afraid of staying the same.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The greatest pleasure in life is doing what people say you cannot do.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "Don't be the same, be better.",
  "Success is not about the destination; it's about the journey and the lessons learned along the way.",
  "The only way to do great work is to love what you do.",
  "Challenges are what make life interesting; overcoming them is what makes life meaningful.",
  "Your time is limited, so don't waste it living someone else's life.",
  "Dream it. Believe it. Achieve it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don't be afraid of change; be afraid of staying the same.",
  "The best way to predict the future is to create it.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "Your attitude determines your altitude.",
  "Success is not just about the destination; it's about the journey and the lessons learned along the way.",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
  "Success is not measured by what you have, but by what you inspire others to achieve.",
  "Your vibe attracts your tribe.",
  "Life is short; make it sweet with your achievements.",
  "The only limits that exist are the ones you place on yourself.",
  "Don't be a passenger in your own life; take the driver's seat and steer it towards your dreams.",
  "Your dreams are the blueprints of your ultimate success; build them with passion and dedication.",
  "Every day is a new opportunity to change your life.",
  "Your potential is endless; go do what you were created to do.",
  "Success is not about the destination; it's about the journey and the lessons learned along the way.",
  "The only way to do great work is to love what you do.",
  "Challenges are what make life interesting; overcoming them is what makes life meaningful.",
  "Your time is limited, so don't waste it living someone else's life.",
  "Dream it. Believe it. Achieve it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don't be afraid of change; be afraid of staying the same.",
  "The best way to predict the future is to create it.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "Your attitude determines your altitude.",
  "Success is not just about the destination; it's about the journey and the lessons learned along the way.",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
  "Success is not measured by what you have, but by what you inspire others to achieve.",
  "Your vibe attracts your tribe.",
  "Life is short; make it sweet with your achievements.",
  "The only limits that exist are the ones you place on yourself.",
  "Don't be a passenger in your own life; take the driver's seat and steer it towards your dreams.",
];

const Quotes = () => {
  const [quote, setQuote] = useState(
    motivational_quotes[getRandomIndex(motivational_quotes)]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(motivational_quotes[getRandomIndex(motivational_quotes)]);
    }, 120000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>&ldquo;{quote}&rdquo;</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    backgroundColor: COLORS.tertiary,
  },
  text: {
    color: COLORS.white,
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
  },
});

export default Quotes;
