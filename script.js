let generateStoryButton = document.querySelector('.generate');
let storyParagraph = document.querySelector('.story');
let characterName = document.querySelector('#name')

let intros = ['There was a drunk clown named', 'I have an uncle named', 'There was an ancient dragon named', 
                'There was a bloodthirsty barbarian named', 'There was an eccentric gentleman named',
                'There was a bandit named', 'There was an evil witch named', 'There was a hippie named'];
let standardText = 'Doe';

let verbs = ['ate', 'slammed', 'rode', 'kicked', 'shouted at', 'laughed at', 'farted in front of', 'played guitar in front of',
                    'stole', 'released', 'made fun of'];
let words = ['a dirty pig', 'a lion', 'a zebra', 'a wall', 'a flaming motorcycle', 'a dinosaur', 'my mom', 'a rabid dog', 
                    'a group of tourists', 'a football team' ];
let context = ['in the moonlight', 'in the rain', 'while laughing', 'while smiling', 'before going to a romantic dinner',
                    'on the streets of Paris', 'at a pool party', 'while listening to death metal'];


function randomizeValue(array){
    index = Math.floor(Math.random() * array.length);
    return array[index];
}

function play(){

    let changedText = standardText;
    // Get the character's name
    if (characterName.value !== '') {
        let name = characterName.value;
        changedText = changedText.replace('Doe', name);
        
    };

    // Randomize a value for each array
    let intro = randomizeValue(intros);
    let randomizedVerb = randomizeValue(verbs);
    let randomizedWord = randomizeValue(words);
    let randomizedContext = randomizeValue(context);

    // Get the output
    let result = `${intro} ${changedText} who ${randomizedVerb} ${randomizedWord} ${randomizedContext}`;
    // Display the output on the web page
    storyParagraph.innerText = result;
    
}

// Add the function to the event handler of the button

generateStoryButton.addEventListener('click', play);