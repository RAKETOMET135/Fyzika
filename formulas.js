export const formulas = [
    {
        name: "Napiš vzorec:",
        desc: "relativní atomová hmotnost (Ar)",
        type: "formula",
        correct: [
            {
                type: "bottom_index",
                value: "A",
                index: "r"
            },
            {
                type: "text",
                value: "="
            },
            {
                type: "fraction",
                upper: [
                    {
                        type: "bottom_index",
                        value: "m",
                        index: "a"
                    }
                ],
                lower: [
                    {
                        type: "bottom_index",
                        value: "m",
                        index: "u"
                    }
                ]
            }
        ]
    },
    {
        name: "Napiš vzorec:",
        desc: "relativní molekulová hmotnost (Mr)",
        type: "formula",
        correct: [
            {
                type: "bottom_index",
                value: "M",
                index: "r"
            },
            {
                type: "text",
                value: "="
            },
            {
                type: "fraction",
                upper: [
                    {
                        type: "bottom_index",
                        value: "m",
                        index: "m"
                    }
                ],
                lower: [
                    {
                        type: "bottom_index",
                        value: "m",
                        index: "u"
                    }
                ]
            }
        ]
    },
    {
        name: "Napiš vzorec:",
        desc: "látkové množství (n)",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "n"
            },
            {
                type: "text",
                value: "="
            },
            {
                type: "fraction",
                upper: [
                    {
                        type: "text",
                        value: "N"
                    }
                ],
                lower: [
                    {
                        type: "bottom_index",
                        value: "N",
                        index: "A"
                    }
                ]
            }
        ]
    },
    {
        name: "Napiš vzorec:",
        desc: "molární hmotnost (Mm) (bez Mr)",
        type: "formula",
        correct: [
            {
                type: "bottom_index",
                value: "M",
                index: "m"
            },
            {
                type: "text",
                value: "="
            },
            {
                type: "fraction",
                upepr: [
                    {
                        type: "text",
                        value: "m"
                    }
                ],
                lower: [
                    {
                        type: "text",
                        value: "n"
                    }
                ]
            }
        ]
    },
    {
        name: "Napiš vzorec:",
        desc: "molární hmotnost (Mm) (s Mr)",
        type: "formula",
        correct: [
            {
                type: "bottom_index",
                value: "M",
                index: "m"
            },
            {
                type: "text",
                value: "="
            },
            {
                type: "bottom_index",
                value: "M",
                index: "r"
            },
            {
                type: "text",
                value: "*"
            },
            {
                type: "upper_index",
                value: "10",
                index: "-3"
            }
        ]
    },
    {
        name: "Napiš vzorec:",
        desc: "molární objem (Vm)",
        type: "formula",
        correct: [
            {
                type: "bottom_index",
                value: "V",
                index: "m"
            },
            {
                type: "text",
                value: "="
            },
            {
                type: "fraction",
                upper: [
                    {
                        type: "text",
                        value: "V"
                    }
                ],
                lower: [
                    {
                        type: "text",
                        value: "n"
                    }
                ]
            }
        ]
    },
    {
        name: "Napiš vzorec:",
        desc: "hmotnost atomu (ma)",
        type: "fraction",
        correct: [
            {
                type: "bottom_index",
                value: "m",
                index: "a"
            },
            {
                type: "text",
                value: "="
            },
            {
                type: "bottom_index",
                value: "A",
                index: "r"
            },
            {
                type: "text",
                value: "*"
            },
            {
                type: "bottom_index",
                value: "m",
                index: "u"
            }
        ]
    },
    {
        name: "Napiš vzorec:",
        desc: "počet (N) (pomocí hmotnosti atomu)",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "N"
            },
            {
                type: "text",
                value: "="
            },
            {
                type: "fraction",
                upper: [
                    {
                        type: "text",
                        value: "m"
                    }
                ],
                lower: [
                    {
                        type: "bottom_index",
                        value: "m",
                        index: "a"
                    }
                ]
            }
        ]
    },
    {
        name: "Napiš vzorec:",
        desc: "objem (V) (základní s hustotou)",
        type: "fraction",
        correct: [
            {
                type: "text",
                value: "V"
            },
            {
                type: "text",
                value: "="
            },
            {
                type: "fraction",
                upper: [
                    {
                        type: "text",
                        value: "m"
                    }
                ],
                lower: [
                    {
                        type: "text",
                        value: "ρ"
                    }
                ]
            }
        ]
    },
    {
        name: "Napiš vzorec:",
        desc: "elektrický náboj (Q)",
        type: "fraction",
        correct: [
            {
                type: "text",
                value: "Q"
            },
            {
                type: "text",
                value: "="
            },
            {
                type: "text",
                value: "Z"
            },
            {
                type: "text",
                value: "*"
            },
            {
                type: "text",
                value: "e"
            }
        ]
    },
    {
        name: "Napiš vzorec:",
        desc: "objem (V) (s použitím tlaku)",
        type: "fraction",
        correct: [
            {
                type: "text",
                value: "V"
            },
            {
                type: "text",
                value: "="
            },
            {
                type: "bottom_index",
                value: "V",
                index: "m"
            },
            {
                type: "text",
                value: "*"
            },
            {
                type: "fraction",
                upper: [
                    {
                        type: "bottom_index",
                        value: "p",
                        index: "a"
                    }
                ],
                lower: [
                    {
                        type: "text",
                        value: "p"
                    }
                ]
            },
            {
                type: "text",
                value: "*"
            },
            {
                type: "text",
                value: "n"
            }
        ]
    },
    {
        name: "Napiš vzorec:",
        desc: "počet (N) (pomocí NA)",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "N"
            },
            {
                type: "text",
                value: "="
            },
            {
                type: "fraction",
                upper: [
                    {
                        type: "text",
                        value: "m"
                    },
                    {
                        type: "text",
                        value: "*"
                    },
                    {
                        type: "bottom_index",
                        value: "N",
                        index: "A"
                    }
                ],
                lower: [
                    {
                        type: "bottom_index",
                        value: "M",
                        index: "m"
                    }
                ]
            }
        ]
    },
    {
        name: "Napiš značku veličiny:",
        desc: "hmotnost atomu",
        type: "formula",
        correct: [
            {
                type: "bottom_index",
                value: "m",
                index: "a"
            }
        ]
    },
    {
        name: "Napiš značku veličiny:",
        desc: "hmotnost molekuly",
        type: "formula",
        correct: [
            {
                type: "bottom_index",
                value: "m",
                index: "m"
            }
        ]
    },
    {
        name: "Napiš značku veličiny:",
        desc: "látkové množství",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "n"
            }
        ]
    },
    {
        name: "Napiš značku veličiny:",
        desc: "počet částic",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "N"
            }
        ]
    },
    {
        name: "Napiš značku konstanty:",
        desc: "hmotnost protonu",
        type: "formula",
        correct: [
            {
                type: "bottom_index",
                value: "m",
                type: "p"
            }
        ]
    },
    {
        name: "Napiš značku konstanty:",
        desc: "hmotnost neutronu",
        type: "formula",
        correct: [
            {
                type: "bottom_index",
                value: "m",
                index: "n"
            }
        ]
    },
    {
        name: "Napiš značku konstanty:",
        desc: "atomová hmotností konstanta",
        type: "formula",
        correct: [
            {
                type: "bottom_index",
                value: "m",
                index: "u"
            }
        ]
    },
    {
        name: "Napiš značku konstanty:",
        desc: "hmotnost elektronu",
        type: "formula",
        correct: [
            {
                type: "bottom_index",
                value: "m",
                index: "e"
            }
        ]
    },
    {
        name: "Napiš značku konstanty:",
        desc: "elementární náboj",
        type: "formula",
        correct: [
            {
                type: "bottom_index",
                value: "q",
                index: "e"
            }
        ]
    },
    {
        name: "Napiš značku konstanty:",
        desc: "1 elektronvolt (1 zvlášť)",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "1"
            },
            {
                type: "text",
                value: "eV"
            }
        ]
    },
    {
        name: "Napiš značku konstanty:",
        desc: "Avogadrova konstanta",
        type: "formula",
        correct: [
            {
                type: "bottom_index",
                value: "N",
                index: "A"
            }
        ]
    },
    {
        name: "Napiš značku veličiny:",
        desc: "relativní atomová hmotnost",
        type: "formula",
        correct: [
            {
                type: "bottom_index",
                value: "A",
                index: "r"
            }
        ]
    },
    {
        name: "Napiš značku veličiny:",
        desc: "relativní molekulová hmotnost",
        type: "formula",
        correct: [
            {
                type: "bottom_index",
                value: "M",
                index: "r"
            }
        ]
    },
    {
        name: "Napiš značku veličiny:",
        desc: "molární hmotnost",
        type: "formula",
        correct: [
            {
                type: "bottom_index",
                value: "M",
                index: "m"
            }
        ]
    },
    {
        name: "Napiš značku veličiny:",
        desc: "molární objem",
        type: "formula",
        correct: [
            {
                type: "bottom_index",
                value: "V",
                index: "m"
            }
        ]
    },
    {
        name: "Napiš značku veličiny:",
        desc: "elektrický náboj",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "Q"
            }
        ]
    },
    {
        name: "Napiš značku veličiny:",
        desc: "protonové číslo",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "Z"
            }
        ]
    },
    {
        name: "Napiš značku veličiny:",
        desc: "nukleonové číslo",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "A"
            }
        ]
    },
    {
        name: "Napiš značku veličiny:",
        desc: "hmotnostní úbytek",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "B"
            }
        ]
    },
    {
        name: "Napiš značku veličiny:",
        desc: "teplota",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "t"
            }
        ]
    },
    {
        name: "Napiš značku veličiny:",
        desc: "čas",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "t"
            }
        ]
    },
    {
        name: "Napiš značku veličiny:",
        desc: "tlak",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "p"
            }
        ]
    },
    {
        name: "Napiš značku konstanty:",
        desc: "rychlost světla ve vakuu",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "c"
            }
        ]
    },
    {
        name: "Napiš značku veličiny:",
        desc: "výhřevnost",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "H"
            }
        ]
    },
    {
        name: "Napiš značku veličiny:",
        desc: "energie",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "E"
            }
        ]
    },
    {
        name: "Napiš vzorec:",
        desc: "uvolněná energie (E)",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "E"
            },
            {
                type: "text",
                value: "="
            },
            {
                type: "text",
                value: "B"
            },
            {
                type: "text",
                value: "*"
            },
            {
                type: "upper_index",
                value: "c",
                index: "2"
            }
        ]
    },
    {
        name: "Napiš značku základní jednotky:",
        desc: "hmotnost atomu (ma)",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "kg"
            }
        ]
    },
    {
        name: "Napiš značku základní jednotky:",
        desc: "hmotnost molekuly (mm)",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "kg"
            }
        ]
    },
    {
        name: "Napiš značku základní jednotky:",
        desc: "látkové množství (n)",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "mol"
            }
        ]
    },
    {
        name: "Napiš značku základní jednotky:",
        desc: "počet částic (N)",
        type: "formula",
        correct: []
    },
    {
        name: "Napiš značku základní jednotky:",
        desc: "relativní atomová hmotnost (Ar)",
        type: "formula",
        correct: []
    },
    {
        name: "Napiš značku základní jednotky:",
        desc: "relativní molekulová hmotnost (Mr)",
        type: "formula",
        correct: []
    },
    {
        name: "Napiš značku základní jednotky:",
        desc: "molární hmotnost (Mm)",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "kg"
            },
            {
                type: "text",
                value: "*"
            },
            {
                type: "upper_index",
                value: "mol",
                index: "-1"
            }
        ]
    },
    {
        name: "Napiš značku základní jednotky:",
        desc: "molární objem (Vm)",
        type: "formula",
        correct: [
            {
                type: "upper_index",
                value: "m",
                index: "3"
            },
            {
                type: "text",
                value: "*"
            },
            {
                type: "upper_index",
                value: "mol",
                index: "-1"
            }
        ]
    },
    {
        name: "Napiš značku základní jednotky:",
        desc: "hmotnost protonu (mp)",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "kg"
            }
        ]
    },
    {
        name: "Napiš značku základní jednotky:",
        desc: "hmotnost neutronu (mn)",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "kg"
            }
        ]
    },
    {
        name: "Napiš značku základní jednotky:",
        desc: "atomová hmotnostní konstanta (mu)",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "kg"
            }
        ]
    },
    {
        name: "Napiš značku základní jednotky:",
        desc: "hmotnost elektronu (me)",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "kg"
            }
        ]
    },
    {
        name: "Napiš značku základní jednotky:",
        desc: "elementární náboj (qe)",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "C"
            }
        ]
    },
    {
        name: "Napiš značku základní jednotky:",
        desc: "1 elektronvolt (1 eV)",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "J"
            }
        ]
    },
    {
        name: "Napiš značku základní jednotky:",
        desc: "Avogadrova konstanta (NA)",
        type: "formula",
        correct: [
            {
                type: "upper_index",
                value: "mol",
                index: "-1"
            }
        ]
    },
    {
        name: "Napiš značku základní jednotky:",
        desc: "elektrický náboj (Q)",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "C"
            }
        ]
    },
    {
        name: "Napiš značku základní jednotky:",
        desc: "tlak (p)",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "Pa"
            }
        ]
    },
    {
        name: "Napiš značku základní jednotky:",
        desc: "výhřevnost (H)",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "J"
            },
            {
                type: "text",
                value: "*"
            },
            {
                type: "upper_index",
                value: "kg",
                index: "-1"
            }
        ]
    },
    {
        name: "Napiš značku základní jednotky:",
        desc: "hmotnostní úbytek (B)",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "kg"
            }
        ]
    },
    {
        name: "Napiš značku základní jednotky:",
        desc: "čas (t)",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "s"
            }
        ]
    },
    {
        name: "Napiš značku základní jednotky:",
        desc: "teplota (t) (ne °C)",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "K"
            }
        ]
    },
    {
        name: "Napiš značku základní jednotky:",
        desc: "energie (E)",
        type: "formula",
        correct: [
            {
                type: "text",
                value: "J"
            }
        ]
    },
]

function traverserTree(tree, correctTree) {
    console.log(tree, correctTree)
    

    if (tree.length !== correctTree.length) return false

    for (let i = 0; i < correctTree.length; i++) {
        const correctSegment = correctTree[i]
        const userSegment = tree[i]

        if (correctSegment.type === "text") {
            if (!userSegment.input) return false

            const userValue = userSegment.input.value

            if (userValue !== correctSegment.value) return false
        }
        else if (correctSegment.type === "bottom_index") {
            if (!userSegment.normalInput || !userSegment.bottomIndexInput) return false

            const userNormalValue = userSegment.normalInput.value
            const userBottomValue = userSegment.bottomIndexInput.value

            if (userNormalValue !== correctSegment.value) return false
            if (userBottomValue !== correctSegment.index) return false
        }
        else if (correctSegment.type === "upper_index") {
            if (!userSegment.normalInput || !userSegment.upperIndexInput) return false

            const userNormalValue = userSegment.normalInput.value
            const userUpperValue = userSegment.upperIndexInput.value

            if (userNormalValue !== correctSegment.value) return false
            if (userUpperValue !== correctSegment.index) return false
        }
        else if (correctSegment.type === "fraction") {
            if (!userSegment.upper || !userSegment.lower) return false

            const upperCorrect = traverserTree(userSegment.upper, correctSegment.upper)
            const lowerCorrect = traverserTree(userSegment.lower, correctSegment.lower)

            if (!upperCorrect) return false
            if (!lowerCorrect) return false
        }
    }

    return true
}

function traverser(content, formula) {
    let formulaTree = formula.correct

    let correct = traverserTree(content, formulaTree)

    return correct
}

export function isCorrect(content, formula) {
    console.log(content, formula.correct)
    

    let correct = traverser(content, formula)

    return correct
}