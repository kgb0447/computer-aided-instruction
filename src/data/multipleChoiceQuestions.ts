

interface multipleChoiceQuestionsTypes {
    Category: string,
    Items:[ 
        {
            Question:string,
            Choices:string[],
            Answer:String
        }
    ],
}

export const multipleChoiceQuestions  = [
    {
        Category: "HTML",
        Items:[
            {
                Question: "What does HTML stands for?",
                Choices: ["Hyper Text Markup Langauge","Higher Text Markup Langauge","Hyper Text Makeup Langauge","Hyper Text Markup Link"],
                Answer: "Hyper Text Markup Langauge"
            },
            {
                Question: "What does HTML stands forssss?",
                Choices: ["Hyper Text Markup Langauge","Higher Text Markup Langauge","Hyper Text Makeup Langauge","Hyper Text Markup Link"],
                Answer: "Hyper Text Markup Langauge"
            }
        ]
    },
    {
        Category: "CSS",
        Items:[
            {
                Question: "What does CSS stands for?",
                Choices: ["Hyper Text Markup Langauge","Higher Text Markup Langauge","Hyper Text Makeup Langauge","Hyper Text Markup Link"],
                Answer: "Cascading Style Sheet"
            },
            {
                Question: "What does HTML stands forssss?",
                Choices: ["Hyper Text Markup Langauge","Higher Text Markup Langauge","Hyper Text Makeup Langauge","Hyper Text Markup Link"],
                Answer: "Hyper Text Markup Langauge"
            }
        ]
    },
    {
        Category: "JavaScript",
        Items:[
            {
                Question: "What is JavaScript?",
                Choices: ["Hyper Text Markup Langauge","Higher Text Markup Langauge","Hyper Text Makeup Langauge","Hyper Text Markup Link"],
                Answer: "Hyper Text Markup Langauge"
            },
            {
                Question: "What does HTML stands forssss?",
                Choices: ["Hyper Text Markup Langauge","Higher Text Markup Langauge","Hyper Text Makeup Langauge","Hyper Text Markup Link"],
                Answer: "Hyper Text Markup Langauge"
            }
        ]
    },
    {
        Category: "React",
        Items:[
            {
                Question: "What is React?",
                Choices: ["Hyper Text Markup Langauge","Higher Text Markup Langauge","Hyper Text Makeup Langauge","Hyper Text Markup Link"],
                Answer: "Hyper Text Markup Langauge"
            },
            {
                Question: "What does HTML stands forssss?",
                Choices: ["Hyper Text Markup Langauge","Higher Text Markup Langauge","Hyper Text Makeup Langauge","Hyper Text Markup Link"],
                Answer: "Hyper Text Markup Langauge"
            }
        ]
    }
]