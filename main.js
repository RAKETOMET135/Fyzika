import { isCorrect, formulas } from "./formulas.js"

const userInput = document.querySelector("#user-input")
const qName = document.querySelector("#question-name")
const qDesc = document.querySelector("#question-desc")
const bg = document.querySelector("#bg")

const correctText = document.querySelector("#correct")
const incorrectText = document.querySelector("#incorrect")
const streakText = document.querySelector("#streak")

let userInputSelected = false
let removeMode = false

let selectedArea = null
let selectedAreaContent = null

let content = []

let correctAns = 0
let incorrectAns = 0
let streakAns = 0

let allowAdd = true

function removeElementFromContent(htmlElement) {
    function removeElementFromContentRecursion(array) {
        for (let i = 0; i < array.length; i++) {
            const contentData = array[i]

            if (contentData.root === htmlElement) {
                array.splice(i, 1)

                break
            }

            if (contentData.upper) {
                removeElementFromContentRecursion(contentData.upper)
            }

            if (contentData.lower) {
                removeElementFromContentRecursion(contentData.lower)
            }
        }
    }

    removeElementFromContentRecursion(content)
}

function updateUserInputSelectionVisual() {
    if (userInputSelected) {
        userInput.style.borderColor = "rgba(0, 255, 0, 0.3)"
        userInput.style.scale = "1.02"
    }
    else {
        userInput.style.borderColor = "white"
        userInput.style.scale = "1"
    }
}

function onSelectedAreaChange(area, data) {
    if (selectedArea) {
        selectedArea.style.background = "transparent"
    }

    if (area) {
        area.style.background = "rgba(0, 255, 0, 0.3)"
    }

    selectedArea = area
    selectedAreaContent = data
}

function resizeInput(input) {
    input.style.width = input.value.length + 1 + 'ch'
}

function insertInput(e, optData) {
    if (!allowAdd && !optData) return

    if (e) {
        e.stopPropagation()
    }

    let data

    const inputElement = document.createElement("input")
    inputElement.classList.add("input-element")
    inputElement.autocomplete = false
    inputElement.autocapitalize = false
    inputElement.placeholder = "a"
    inputElement.spellcheck = false

    if (optData) {
        inputElement.value = optData.value
    }

    inputElement.addEventListener("input", () => {
        resizeInput(inputElement)
    })

    data = {
        input: inputElement,
        root: inputElement
    }

    if (selectedArea) {
        selectedArea.append(inputElement)

        if (selectedArea.classList.contains("upper-fraction")) {
            selectedAreaContent.upper.push(data)
        }
        else if (selectedArea.classList.contains("bottom-fraction")) {
            selectedAreaContent.lower.push(data)
        }
    }
    else {
        userInput.append(inputElement)

        content.push(data)
    }

    inputElement.addEventListener("contextmenu", (e) => {
        e.stopPropagation()
        e.preventDefault()

        removeElementFromContent(inputElement)

        inputElement.remove()
    })

    return inputElement
}

function insertBottomIndex(e, optData) {
    if (!allowAdd && !optData) return

    if (e) {
        e.stopPropagation()
    }

    let data

    const bottomIndexElement = document.createElement("div")
    bottomIndexElement.classList.add("bottom-index-element")
    
    const normalInputElement = document.createElement("input")
    normalInputElement.classList.add("bottom-index-element-normal")
    normalInputElement.autocomplete = false
    normalInputElement.autocapitalize = false
    normalInputElement.placeholder = "a"
    normalInputElement.spellcheck = false

    if (optData) {
        normalInputElement.value = optData.value
    }

    bottomIndexElement.append(normalInputElement)

    const bottomIndexInputElement = document.createElement("input")
    bottomIndexInputElement.classList.add("bottom-index-element-index")
    bottomIndexInputElement.autocomplete = false
    bottomIndexInputElement.autocapitalize = false
    bottomIndexInputElement.placeholder = "n"
    bottomIndexInputElement.spellcheck = false

    if (optData) {
        bottomIndexInputElement.value = optData.index
    }

    bottomIndexElement.append(bottomIndexInputElement)

    data = {
        normalInput: normalInputElement,
        bottomIndexInput: bottomIndexInputElement,
        root: bottomIndexElement
    }

    if (selectedArea) {
        selectedArea.append(bottomIndexElement)

        if (selectedArea.classList.contains("upper-fraction")) {
            selectedAreaContent.upper.push(data)
        }
        else if (selectedArea.classList.contains("bottom-fraction")) {
            selectedAreaContent.lower.push(data)
        }
    }
    else {
        userInput.append(bottomIndexElement)

        content.push(data)
    }

    bottomIndexElement.addEventListener("contextmenu", (e) => {
        e.stopPropagation()
        e.preventDefault()

        removeElementFromContent(bottomIndexElement)

        bottomIndexElement.remove()
    })
}

function insertUpperIndex(e, optData) {
    if (!allowAdd && !optData) return

    if (e) {
        e.stopPropagation()
    }

    let data

    const upperIndexElement = document.createElement("div")
    upperIndexElement.classList.add("bottom-index-element")
    
    const normalInputElement = document.createElement("input")
    normalInputElement.classList.add("bottom-index-element-normal")
    normalInputElement.autocomplete = false
    normalInputElement.autocapitalize = false
    normalInputElement.placeholder = "a"
    normalInputElement.spellcheck = false
    
    if (optData) {
        normalInputElement.value = optData.value
    }

    upperIndexElement.append(normalInputElement)

    const upperIndexInputElement = document.createElement("input")
    upperIndexInputElement.classList.add("bottom-index-element-index")
    upperIndexInputElement.autocomplete = false
    upperIndexInputElement.autocapitalize = false
    upperIndexInputElement.placeholder = "n"
    upperIndexInputElement.spellcheck = false
    upperIndexInputElement.style.translate = "-35% -20%"

    if (optData) {
        upperIndexInputElement.value = optData.index
    }

    upperIndexElement.append(upperIndexInputElement)

    data = {
        normalInput: normalInputElement,
        upperIndexInput: upperIndexInputElement,
        root: upperIndexElement
    }

    if (selectedArea) {
        selectedArea.append(upperIndexElement)

        if (selectedArea.classList.contains("upper-fraction")) {
            selectedAreaContent.upper.push(data)
        }
        else if (selectedArea.classList.contains("bottom-fraction")) {
            selectedAreaContent.lower.push(data)
        }
    }
    else {
        userInput.append(upperIndexElement)

        content.push(data)
    }

    upperIndexElement.addEventListener("contextmenu", (e) => {
        e.stopPropagation()
        e.preventDefault()

        removeElementFromContent(upperIndexElement)

        upperIndexElement.remove()
    })
}

function insertFraction(e, optData) {
    if (!allowAdd && !optData) return

    if (e) {
        e.stopPropagation()
    }

    let data

    const fractionElement = document.createElement("div")
    fractionElement.classList.add("fraction-element")

    const upperFraction = document.createElement("div")
    upperFraction.classList.add("upper-fraction")

    upperFraction.addEventListener("click", (e) => {
        e.stopPropagation()

        if (removeMode) {
            fractionElement.remove()

            removeElementFromContent(fractionElement)
        }
        else {
            onSelectedAreaChange(upperFraction, data)
        }
    })

    fractionElement.append(upperFraction)

    const middleFraction = document.createElement("div")
    middleFraction.classList.add("middle-fraction")

    fractionElement.append(middleFraction)

    const bottomFraction = document.createElement("div")
    bottomFraction.classList.add("bottom-fraction")

    bottomFraction.addEventListener("click", (e) => {
        e.stopPropagation()

        if (removeMode) {
            fractionElement.remove()

            removeElementFromContent(fractionElement)
        }
        else {
            onSelectedAreaChange(bottomFraction, data)
        }
    })

    fractionElement.append(bottomFraction)

    data = {
        upper: [],
        lower: [],
        element: fractionElement,
        root: fractionElement
    }

    if (selectedArea) {
        selectedArea.append(fractionElement)

        if (selectedArea.classList.contains("upper-fraction")) {
            selectedAreaContent.upper.push(data)
        }
        else if (selectedArea.classList.contains("bottom-fraction")) {
            selectedAreaContent.lower.push(data)
        }
    }
    else {
        userInput.append(fractionElement)

        content.push(data)
    }

    fractionElement.addEventListener("contextmenu", (e) => {
        e.stopPropagation()
        e.preventDefault()

        removeElementFromContent(fractionElement)

        fractionElement.remove()
    })

    return [fractionElement, upperFraction, bottomFraction, middleFraction]
}

function triggerRemove() {
    if (!allowAdd) return

    removeMode = !removeMode

    function removeElement(ev) {
        ev.stopPropagation()

        if (ev.target.classList.contains("input-element") 
            || ev.target.classList.contains("bottom-index-element")
            || ev.target.classList.contains("fraction-element")
        ) {
            removeElementFromContent(ev.target)

            ev.target.remove()
        }
        else {
            removeElementFromContent(ev.target.parentElement)

            ev.target.parentElement.remove()
        }
    }

    if (removeMode) {
        document.body.style.cursor = "crosshair"

        const inputs = document.querySelectorAll("input")

        inputs.forEach(input => {
            input.readOnly = true
            input.style.cursor = "crosshair"
        })

        const inputElements = document.querySelectorAll(".input-element")
        const bottomIndexElements = document.querySelectorAll(".bottom-index-element")
        const fractionElements = document.querySelectorAll(".fraction-element")
        const allElements = []
        
        inputElements.forEach(e => {
            allElements.push(e)
        })
        bottomIndexElements.forEach(e => {
            allElements.push(e)
        })
        fractionElements.forEach(e => {
            allElements.push(e)
        })

        allElements.forEach(e => {
            e.classList.add("remove-mode")

            e.addEventListener("click", removeElement)
        })

        bg.style.backgroundColor = "rgba(54, 2, 2, 1)"
    }
    else {
        document.body.style.cursor = "default"

        const inputs = document.querySelectorAll("input")

        inputs.forEach(input => {
            input.readOnly = false
            input.style.cursor = "text"
        })

        const inputElements = document.querySelectorAll(".input-element")
        const bottomIndexElements = document.querySelectorAll(".bottom-index-element")
        const fractionElements = document.querySelectorAll(".fraction-element")
        const allElements = []
        
        inputElements.forEach(e => {
            allElements.push(e)
        })
        bottomIndexElements.forEach(e => {
            allElements.push(e)
        })
        fractionElements.forEach(e => {
            allElements.push(e)
        })

        allElements.forEach(e => {
            e.classList.remove("remove-mode")

            e.removeEventListener("click", removeElement)
        })

        bg.style.backgroundColor = "rgb(22, 22, 22)"
    }
}

let toUseQuestions = []
let qFormula = null
function loadQuestion() {
    if (toUseQuestions.length <= 0) {
        toUseQuestions = JSON.parse(JSON.stringify(formulas))
    }

    const questionIndex = Math.floor(Math.random() * toUseQuestions.length)
    const question = toUseQuestions[questionIndex]

    qFormula = question

    toUseQuestions.splice(questionIndex, 1)

    qName.innerText = question.name
    qDesc.innerText = question.desc
}

function spawnIncorrectAnswer() {
    if (!qFormula) return

    const c = qFormula.correct

    function addCData(cData) {
        if (cData.type === "text") {
            const i = insertInput(null, cData)

            resizeInput(i)
        }
        else if (cData.type === "bottom_index") {
            insertBottomIndex(null, cData)
        }
        else if (cData.type === "upper_index") {
            insertUpperIndex(null, cData)
        }
        else if (cData.type === "fraction") {
            const f = insertFraction(null, cData)

            for (let i = 0; i < cData.lower.length; i++) {
                const _cData = cData.lower[i]

                selectedAreaContent = {upper: [], lower: []}
                selectedArea = f[2]

                console.log("l")
                

                addCData(_cData)
            }

            for (let i = 0; i < cData.upper.length; i++) {
                const _cData = cData.upper[i]

                selectedAreaContent = {upper: [], lower: []}
                selectedArea = f[1]

                addCData(_cData)
            }

            selectedAreaContent = null
            selectedArea = null
        }
    }

    for (let i = 0; i < c.length; i++) {
        const cData = c[i]

        addCData(cData)
    }
}

function submit() {
    if (allowAdd) {
        const correct = isCorrect(content, qFormula)

        if (correct) {
            correctAns++
            streakAns++

            userInput.style.borderColor = "green"
        }
        else {
            incorrectAns++
            streakAns = 0

            userInput.style.borderColor = "red"

            while (userInput.children.length > 0) {
                userInput.firstChild.remove()
            }

            spawnIncorrectAnswer()
        }

        userInput.style.pointerEvents = "none"

        updateData()

        allowAdd = false
    }
    else {
        content = []

        while (userInput.children.length > 0) {
            userInput.firstChild.remove()
        }

        userInput.style.pointerEvents = "all"
        userInput.style.borderColor = "white"

        allowAdd = true

        loadQuestion()
    }
}

function updateData() {
    correctText.innerText = `Správně: ${correctAns}`
    incorrectText.innerText = `Špatně: ${incorrectAns}`
    streakText.innerText = `Série: ${streakAns}`
}

function main() {
    /*
    userInput.addEventListener("click", (e) => {
        e.stopPropagation()

        userInputSelected = true

        updateUserInputSelectionVisual()
    })
    */

    document.addEventListener("click", () => {
        userInputSelected = false

        //updateUserInputSelectionVisual()

        onSelectedAreaChange(null)
    })

    const input = document.querySelector("#input")
    input.addEventListener("click", insertInput)

    const bottomIndex = document.querySelector("#bottom-index")
    bottomIndex.addEventListener("click", insertBottomIndex)

    const upperIndex = document.querySelector("#upper-index")
    upperIndex.addEventListener("click", insertUpperIndex)

    const addFraction = document.querySelector("#add-fraction")
    addFraction.addEventListener("click", insertFraction)

    const remove = document.querySelector("#remove")
    remove.addEventListener("click", triggerRemove)

    const submitButton = document.querySelector("#submit")
    submitButton.addEventListener("click", submit)

    const hustota = document.querySelector("#hustota")
    hustota.addEventListener("click", async (e) => {
        await navigator.clipboard.writeText("ρ")
    })

    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            submit()
        }
    })

    loadQuestion()
    updateData()
}

main()