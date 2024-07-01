import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import fetchQuiz from '../../utils/fetchQuiz';

const quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showQuestions, setShowQuestions] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [skipped, setSkipped] = useState(0);
  const [checkAnswer, setCheckAnswer] = useState(false)

  const questions = fetchQuiz();

  const handleAnswer = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (selectedOption === null) {
      setSkipped(skipped + 1)
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null); 
    } else {
      setShowScore(true);
      setCheckAnswer(false)
      setShowQuestions(false)
    }
  };

  const handleSkip = () => {
    setSkipped(skipped + 1)

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setCheckAnswer(false)
      setShowQuestions(false)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setCheckAnswer(false)
    setSelectedOption(null);
    setSkipped(0);
    setShowQuestions(true)
  };

  const handleCheckAnswer = () => {
    setShowScore(false);
    setShowQuestions(false)
    setCheckAnswer(true)
    setCurrentQuestion(0);
    setSelectedOption(null);
  };

  const handleCheckAnswerNext = () => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null); 
    } else {
      setShowScore(true);
      setCheckAnswer(false)
      setShowQuestions(false)
    }
  };


  return (
    <View style={styles.container}>

      {showScore && (
        <>
        <Text style={{fontWeight: '600', fontSize: 17, textAlign: 'center'}}>Congratulations</Text>

        <Image
              source={require('../../../assets/images/score.jpg')}
              style={styles.image}
          />

          <TouchableOpacity onPress={handleCheckAnswer} style={[{marginBottom: 30},{...styles.button}]}>
              <Text style={styles.buttonText}>Check Answer</Text>
          </TouchableOpacity>

        <View style={styles.scoreContainer}>
          <View>
            <View style={styles.subScoreContainer}>
              <View style={styles.subScore}>
                <Text style={styles.scoreText}>{((questions.length - skipped) / questions.length) * 100}%</Text>
                <Text style={styles.scoreTitle}>Completion</Text>
              </View>
              <View style={styles.subScore}>
                <Text style={styles.scoreText}>{score}</Text>
                <Text style={styles.scoreTitle}>Correct Answer</Text>
              </View>
            </View>

            <View style={styles.subScoreContainer}>
              <View style={styles.subScore}>
                <Text style={styles.scoreText}>{(questions.length - score - skipped)}</Text>
                <Text style={styles.scoreTitle}>Incorrect Answer</Text>
              </View>
              <View style={styles.subScore}>
                <Text style={styles.scoreText}>{skipped}</Text>
                <Text style={styles.scoreTitle}>Skipped</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity onPress={resetQuiz} style={styles.button}>
              <Text style={styles.buttonText}>Restart Quiz</Text>
          </TouchableOpacity>

        </View>
        </>
      )
    }

    {showQuestions && (
      <>
         <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
             <Text style={styles.questionCounter}>Question {currentQuestion + 1}/{questions.length}</Text>
             <TouchableOpacity onPress={handleSkip}><Text style={{color: '#1789FC', fontSize: 16}}>Skip</Text></TouchableOpacity>
           </View>

           <Image
              source={require('../../../assets/images/quizTwo.jpg')}
              style={styles.image}
            />


           <View style={{paddingBottom: 10, flex: 1, justifyContent: 'space-between'}}>
               <View>
                 <Text style={styles.questionText}>Q. {questions[currentQuestion].question}</Text>
                 {questions[currentQuestion].options.map((option, index) => (
                   <TouchableOpacity
                     key={index}
                     onPress={() => handleAnswer(option)}
                     style={[styles.optionButton, selectedOption === option && { borderColor: '#1789FC' }]} 
                   >
                     <Text style={[styles.optionText, selectedOption === option && { color: '#1789FC' }]}
                     >{option}</Text>
                   </TouchableOpacity>
                 ))}
               </View>
               {selectedOption && (
                 <TouchableOpacity onPress={handleNext} style={styles.button}>
                   <Text style={styles.buttonText}>Next</Text>
                 </TouchableOpacity>
               )}
          </View>
     </>
    )}
         

    {checkAnswer && (
      <>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text style={styles.questionCounter}>Question {currentQuestion + 1}/{questions.length}</Text>
      </View>
      <Image
         source={require('../../../assets/images/quizTwo.jpg')}
         style={styles.image}
      />
      <View style={{paddingBottom: 20, flex: 1, justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.questionText}>Q. {questions[currentQuestion].question}</Text>
            {questions[currentQuestion].options.map((option, index) => (
              <View
                key={index}
                style={[styles.optionButton, option === questions[currentQuestion].correctAnswer && { borderColor: '#33E45F' }]} 
              >
                <Text 
                style={[styles.optionText, option === questions[currentQuestion].correctAnswer && { color: '#33E45F' }]} 
                >{option}</Text>
              </View>
            ))}
          </View>
          
            <TouchableOpacity onPress={handleCheckAnswerNext} style={styles.button}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>

        </View>
      </>
    )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  scoreContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  scoreText: {
    fontSize: 17,
    fontWeight: '600',
  },
  scoreTitle: {
    color: 'rgba(0,0,0,0.7)'
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  },
  questionText: {
    fontSize: 17,
    marginBottom: 20,
    fontWeight: '600',
    color: '#333'
  },
  optionButton: {
    backgroundColor: '#fff',
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.1)'
  },
  optionText: {
    color: '#333',
    fontSize: 15,
    fontWeight: '500'
  },
  questionCounter: {
    color: '#FFBB56',
    fontWeight: '500',
    fontSize: 17,
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: 'cover', 
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginVertical: 20
  },
  subScore: {
    flex: .45,
    padding: 17, 
    backgroundColor: '#fff',
    gap: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  subScoreContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    width: '100%',
    marginBottom: 20
  }
});

export default quiz;
