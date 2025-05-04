export const defaultCoffeeFlavourProfile = {
    Chocolatey: { intensity: "Balanced", value: 50 },
    Acidity: { intensity: "Balanced", value: 50 },
    Nutty: { intensity: "Balanced", value: 50 },
    Floral: { intensity: "Balanced", value: 50 },
    Fruity: { intensity: "Balanced", value: 50 },
    Sweet: { intensity: "Balanced", value: 50 },
    Creamy: { intensity: "Balanced", value: 50 }
};

export const defaultTeaFlavourProfile = {
    Floral: { intensity: "Balanced", value: 50 },
    Fruity: { intensity: "Balanced", value: 50 },
    Sweet: { intensity: "Balanced", value: 50 },
    Herbaceous: { intensity: "Balanced", value: 50 },
    Earthy: { intensity: "Balanced", value: 50 },
    Refreshing: { intensity: "Balanced", value: 50 },
    Creamy: { intensity: "Balanced", value: 50 }
};

export const defaultJuiceFlavourProfile = {
    Sweet: { intensity: "Balanced", value: 50 },
    Refreshing: { intensity: "Balanced", value: 50 },
    Earthy: { intensity: "Balanced", value: 50 },
    Tangy: { intensity: "Balanced", value: 50 },
    Spicy: { intensity: "Balanced", value: 50 },
    Tart: { intensity: "Balanced", value: 50 }
};

export const defaultOthersFlavourProfile = {
    Sweet: { intensity: "Balanced", value: 50 },
    Fruity: { intensity: "Balanced", value: 50 },
    Floral: { intensity: "Balanced", value: 50 },
    Earthy: { intensity: "Balanced", value: 50 },
    Creamy: { intensity: "Balanced", value: 50 },
    Refreshing: { intensity: "Balanced", value: 50 }
};

export const defaultFlavourProfile = {
    Coffee: defaultCoffeeFlavourProfile,
    Tea: defaultTeaFlavourProfile,
    Juice: defaultJuiceFlavourProfile,
    Others: defaultOthersFlavourProfile
}

export const coffeeProfiles = [
    {
        title: "Chocolatey",
        minLabel: "Subtle",
        maxLabel: "Rich",
        marks: [
            {
                label: "Subtle",
                value: 0
            },
            {
                label: "Rich",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Subtle",
            25: "Less Subtle",
            50: "Balanced",
            75: "Less Rich",
            100: "Rich"
        }
    },
    {
        title: "Acidity",
        minLabel: "Smooth",
        maxLabel: "Zesty",
        marks: [
            {
                label: "Smooth",
                value: 0
            },
            {
                label: "Zesty",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Smooth",
            25: "Less Smooth",
            50: "Balanced",
            75: "Less Zesty",
            100: "Zesty"
        }
    },
    {
        title: "Nutty",
        minLabel: "Hints",
        maxLabel: "Roasted",
        marks: [
            {
                label: "Hints",
                value: 0
            },
            {
                label: "Roasted",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Hints",
            25: "Less Hints",
            50: "Balanced",
            75: "Less Roasted",
            100: "Roasted"
        }
    },
    {
        title: "Floral",
        minLabel: "Delicate",
        maxLabel: "Fragrant",
        marks: [
            {
                label: "Delicate",
                value: 0
            },
            {
                label: "Fragrant",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Delicate",
            25: "Less Delicate",
            50: "Balanced",
            75: "Less Fragrant",
            100: "Fragrant"
        }
    },
    {
        title: "Fruity",
        minLabel: "Light",
        maxLabel: "Juicy",
        marks: [
            {
                label: "Light",
                value: 0
            },
            {
                label: "Juicy",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Light",
            25: "Less Light",
            50: "Balance",
            75: "Less Juicy",
            100: "Fragrant"
        }
    },
    {
        title: "Sweet",
        minLabel: "Subtle",
        maxLabel: "Sweet",
        marks: [
            {
                label: "Subtle",
                value: 0
            },
            {
                label: "Sweet",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Subtle",
            25: "Less Subtle",
            50: "Balanced",
            75: "Less Sweet",
            100: "Sweet"
        }
    },
    {
        title: "Creamy",
        minLabel: "Light",
        maxLabel: "Lush",
        marks: [
            {
                label: "Light",
                value: 0
            },
            {
                label: "Lush",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Light",
            25: "Smooth",
            50: "Balanced",
            75: "Velvety",
            100: "Lush"
        }
    }
];

export const teaProfiles = [
    {
        title: "Floral",
        minLabel: "Delicate",
        maxLabel: "Fragrant",
        marks: [
            {
                label: "Delicate",
                value: 0
            },
            {
                label: "Fragrant",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Delicate",
            25: "Less Delicate",
            50: "Balanced",
            75: "Less Fragrant",
            100: "Fragrant"
        }
    },
    {
        title: "Fruity",
        minLabel: "Light",
        maxLabel: "Juicy",
        marks: [
            {
                label: "Light",
                value: 0
            },
            {
                label: "Juicy",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Light",
            25: "Less Light",
            50: "Balance",
            75: "Less Juicy",
            100: "Fragrant"
        }
    },
    {
        title: "Sweet",
        minLabel: "Subtle",
        maxLabel: "Sweet",
        marks: [
            {
                label: "Subtle",
                value: 0
            },
            {
                label: "Sweet",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Subtle",
            25: "Less Subtle",
            50: "Balanced",
            75: "Less Sweet",
            100: "Sweet"
        }
    },
    {
        title: "Herbaceous",
        minLabel: "Mild",
        maxLabel: "Strong",
        marks: [
            {
                label: "Mild",
                value: 0
            },
            {
                label: "Strong",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Mild",
            25: "Hints of Herbs",
            50: "Balanced",
            75: "Distinctly Herbal",
            100: "Strong"
        }
    },
    {
        title: "Earthy",
        minLabel: "Light",
        maxLabel: "Mossy",
        marks: [
            {
                label: "Light",
                value: 0
            },
            {
                label: "Mossy",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Light",
            25: "Earth-Tinged",
            50: "Balanced",
            75: "Deep Earthiness",
            100: "Mossy"
        }
    },
    {
        title: "Refreshing",
        minLabel: "Soft",
        maxLabel: "Invigorating",
        marks: [
            {
                label: "Soft",
                value: 0
            },
            {
                label: "Invigorating",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Soft",
            25: "Mildly Cool",
            50: "Balanced",
            75: "Crisp",
            100: "Invigorating"
        }
    },
    {
        title: "Creamy",
        minLabel: "Light",
        maxLabel: "Heavy",
        marks: [
            {
                label: "Light",
                value: 0
            },
            {
                label: "Heavy",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Light",
            25: "Smooth",
            50: "Balanced",
            75: "Soft Creaminess",
            100: "Heavy"
        }
    }
];

export const juiceProfiles = [
    {
        title: "Sweet",
        minLabel: "Subtle",
        maxLabel: "Sweet",
        marks: [
            {
                label: "Subtle",
                value: 0
            },
            {
                label: "Sweet",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Subtle",
            25: "Less Subtle",
            50: "Balanced",
            75: "Less Sweet",
            100: "Sweet"
        }
    }, 
    {
        title: "Refreshing",
        minLabel: "Soft",
        maxLabel: "Invigorating",
        marks: [
            {
                label: "Soft",
                value: 0
            },
            {
                label: "Invigorating",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Soft",
            25: "Mildly Cool",
            50: "Balanced",
            75: "Crisp",
            100: "Invigorating"
        }
    },
    {
        title: "Earthy",
        minLabel: "Light",
        maxLabel: "Mossy",
        marks: [
            {
                label: "Light",
                value: 0
            },
            {
                label: "Mossy",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Light",
            25: "Vegetal",
            50: "Balanced",
            75: "Deep",
            100: "Mossy"
        }
    },
    {
        title: "Tangy",
        minLabel: "Mild",
        maxLabel: "Zingy",
        marks: [
            {
                label: "Mild",
                value: 0
            },
            {
                label: "Zingy",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Mild",
            25: "Slight Tang",
            50: "Balanced",
            75: "Tangy",
            100: "Zingy"
        }
    },
    {
        title: "Spicy",
        minLabel: "Warm",
        maxLabel: "Fiery",
        marks: [
            {
                label: "Warm",
                value: 0
            },
            {
                label: "Fiery",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Warm",
            25: "Mild Heat",
            50: "Spiced",
            75: "Bold",
            100: "Fiery"
        }
    },
    {
        title: "Tart",
        minLabel: "Soft",
        maxLabel: "Sharp",
        marks: [
            {
                label: "Soft",
                value: 0
            },
            {
                label: "Sharp",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Soft",
            25: "Hint of Tartness",
            50: "Balanced",
            75: "Tart",
            100: "Sharp"
        }
    }
];

export const othersProfile = [
    {
        title: "Sweet",
        minLabel: "Subtle",
        maxLabel: "Sweet",
        marks: [
            {
                label: "Subtle",
                value: 0
            },
            {
                label: "Sweet",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Subtle",
            25: "Lightly Sweet",
            50: "Balanced",
            75: "Sugary",
            100: "Sweet"
        }
    },
    {
        title: "Fruity",
        minLabel: "Hint",
        maxLabel: "Juicy",
        marks: [
            {
                label: "Hint",
                value: 0
            },
            {
                label: "Juicy",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Hint",
            25: "Mild Fruit",
            50: "Balanced",
            75: "Bright",
            100: "Juicy"
        }
    },
    {
        title: "Floral",
        minLabel: "Delicate",
        maxLabel: "Fragrant",
        marks: [
            {
                label: "Delicate",
                value: 0
            },
            {
                label: "Fragrant",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Delicate",
            25: "Aromatic Hint",
            50: "Balanced",
            75: "Flowery",
            100: "Fragrant"
        }
    },
    {
        title: "Earthy",
        minLabel: "Light",
        maxLabel: "Rooted",
        marks: [
            {
                label: "Light",
                value: 0
            },
            {
                label: "Rooted",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Light",
            25: "Vegetal",
            50: "Balanced",
            75: "Deep",
            100: "Rooted"
        }
    },
    {
        title: "Creamy",
        minLabel: "Light",
        maxLabel: "Velvety",
        marks: [
            {
                label: "Light",
                value: 0
            },
            {
                label: "Velvety",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Light",
            25: "Smooth",
            50: "Balanced",
            75: "Full-Bodied",
            100: "Velvety"
        }
    },
    {
        title: "Refreshing",
        minLabel: "Soft",
        maxLabel: "Crisp",
        marks: [
            {
                label: "Soft",
                value: 0
            },
            {
                label: "Crisp",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Soft",
            25: "Cooling",
            50: "Balanced",
            75: "Hydrating",
            100: "Crisp"
        }
    },
];

// Profiles for the different drink bases 
export const drinkBaseFlavourProfiles = {
    Coffee: coffeeProfiles,
    Tea: teaProfiles,
    Juice: juiceProfiles,
    Others: othersProfile
}