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
            0: "Not Chocolatey",
            25: "Mildly Chocolatey",
            50: "Balanced",
            75: "Chocolatey",
            100: "More Chocolatey"
        }
    },
    {
        title: "Acidity",
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
            0: "Not Acidic",
            25: "Mildly Acidic",
            50: "Balanced",
            75: "Acidic",
            100: "More Acidic"
        }
    },
    {
        title: "Nutty",
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
            0: "Not Nutty",
            25: "Mildly Nutty",
            50: "Balanced",
            75: "Nutty",
            100: "More Nutty"
        }
    },
    {
        title: "Floral",
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
            0: "Not Floral",
            25: "Mildly Floral",
            50: "Balanced",
            75: "Floral",
            100: "More Floral"
        }
    },
    {
        title: "Fruity",
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
            0: "Not Fruity",
            25: "Mildly Fruity",
            50: "Balanced",
            75: "Fruity",
            100: "More Fruity"
        }
    },
    {
        title: "Sweet",
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
            0: "Not Sweet",
            25: "Mildly Sweet",
            50: "Balanced",
            75: "Sweet",
            100: "More Sweet"
        }
    },
    {
        title: "Creamy",
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
            0: "Not Creamy",
            25: "Mildly Creamy",
            50: "Balanced",
            75: "Creamy",
            100: "More Creamy"
        }
    }
];

export const teaProfiles = [
    {
        title: "Floral",
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
            0: "Not Floral",
            25: "Mildly Floral",
            50: "Balanced",
            75: "Floral",
            100: "More Floral"
        }
    },
    {
        title: "Fruity",
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
            0: "Not Fruity",
            25: "Mildly Fruity",
            50: "Balanced",
            75: "Fruity",
            100: "More Fruity"
        }
    },
    {
        title: "Sweet",
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
            0: "Not Sweet",
            25: "Mildly Sweet",
            50: "Balanced",
            75: "Sweet",
            100: "More Sweet"
        }
    },
    {
        title: "Herbaceous",
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
            0: "Not Herbal",
            25: "Mildly Herbal",
            50: "Balanced",
            75: "Herbal",
            100: "More Herbal"
        }
    },
    {
        title: "Earthy",
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
            0: "Not Earthy",
            25: "Mildly Earthy",
            50: "Balanced",
            75: "Earthy",
            100: "More Earthy"
        }
    },
    {
        title: "Refreshing",
        marks: [
            {
                label: "Soft",
                value: 0
            },
            {
                label: "Lively",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Not Refreshing",
            25: "Mildly Refreshing",
            50: "Balanced",
            75: "Refreshing",
            100: "More Refreshing"
        }
    },
    {
        title: "Creamy",
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
            0: "Not Creamy",
            25: "Mildly Creamy",
            50: "Balanced",
            75: "Creamy",
            100: "More Creamy"
        }
    }
];

export const juiceProfiles = [
    {
        title: "Sweet",
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
            0: "Not Sweet",
            25: "Mildly Sweet",
            50: "Balanced",
            75: "Sweet",
            100: "More Sweet"
        }
    }, 
    {
        title: "Refreshing",
        marks: [
            {
                label: "Soft",
                value: 0
            },
            {
                label: "Lively",
                value: 100
            }
        ],
        flavourIntensity: {
            0: "Not Refreshing",
            25: "Mildly Refreshing",
            50: "Balanced",
            75: "Refreshing",
            100: "More Refreshing"
        }
    },
    {
        title: "Earthy",
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
            0: "Not Earthy",
            25: "Mildly Earthy",
            50: "Balanced",
            75: "Earthy",
            100: "More Earthy"
        }
    },
    {
        title: "Tangy",
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
            0: "Not Tangy",
            25: "Mildly Tangy",
            50: "Balanced",
            75: "Tangy",
            100: "More Tangy"
        }
    },
    {
        title: "Spicy",
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
            0: "Not Spicy",
            25: "Mildly Spicy",
            50: "Balanced",
            75: "Spicy",
            100: "More Spicy"
        }
    },
    {
        title: "Tart",
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
            0: "Not Tart",
            25: "Mildly Tart",
            50: "Balanced",
            75: "Tart",
            100: "More Tart"
        }
    }
];

export const othersProfile = [
    {
        title: "Sweet",
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
            0: "Not Sweet",
            25: "Mildly Sweet",
            50: "Balanced",
            75: "Sweet",
            100: "More Sweet"
        }
    },
    {
        title: "Fruity",
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
            0: "Not Fruity",
            25: "Mildly Fruity",
            50: "Balanced",
            75: "Fruity",
            100: "More Fruity"
        }
    },
    {
        title: "Floral",
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
            0: "Not Floral",
            25: "Mildly Floral",
            50: "Balanced",
            75: "Floral",
            100: "More Floral"
        }
    },
    {
        title: "Earthy",
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
            0: "Not Earthy",
            25: "Mildly Earthy",
            50: "Balanced",
            75: "Earthy",
            100: "More Earthy"
        }
    },
    {
        title: "Creamy",
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
            0: "Not Creamy",
            25: "Mildly Creamy",
            50: "Balanced",
            75: "Creamy",
            100: "More Creamy"
        }
    },
    {
        title: "Refreshing",
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
            0: "Not Refreshing",
            25: "Mildly Refreshing",
            50: "Balanced",
            75: "Refreshing",
            100: "More Refreshing"
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