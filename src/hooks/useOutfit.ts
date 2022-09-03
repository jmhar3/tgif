import { useEffect, useCallback, useState } from "react";
import { WeatherStats } from "../pages";

export interface OutfitProps {
  weatherStats: WeatherStats;
  isActive: boolean;
}

export interface OutfitData {
  accessory?: string;
  top?: string;
  bottoms?: string;
}

export const useOutfit = (props: OutfitProps) => {
  const { weatherStats, isActive } = props;

  const [outfitRecommendation, setOutfitRecommendation] = useState<OutfitData>({
    accessory: undefined,
    top: undefined,
    bottoms: undefined,
  });

  const generateOutfit = useCallback(() => {
    const { isCold, isHumid, isWindy, isRainy, light } = weatherStats;

    const umbrella = "/images/umbrella.png";
    const sunglasses = "/images/sunglasses.png";
    const raincoat = "/images/rain.png";
    const shorts = "/images/denim-shorts.png";
    const coolShorts = "/images/shorts.png";
    const longPants = "/images/pants.png";
    const warmPants = "/images/trousers.png";
    const sweater = "/images/sweater.png";
    const longShirt = "/images/long-sleeves.png";
    const tshirt = "/images/tshirt.png";
    const top = "/images/shirt.png";
    const hat = "/images/hat.png";

    light === "high" && setOutfitRecommendation((prevOutfit) => ({
     ...prevOutfit,
     accessory: sunglasses
    }))

    isCold && setOutfitRecommendation((prevOutfit) => ({
     ...prevOutfit,
     top: isActive ? tshirt : sweater,
     bottoms: isActive ? longPants : warmPants
    }))

    !isCold && setOutfitRecommendation((prevOutfit) => ({
     ...prevOutfit,
     top: isActive ? top : tshirt,
     bottoms: isActive ? coolShorts : shorts
    }))

    isRainy && setOutfitRecommendation((prevOutfit) => ({
     ...prevOutfit,
     accessory: isWindy ? raincoat : umbrella
    }))

    // if (isHumid) {
    //   if (isWindy) {
    //     if (rain === "low") {
    //       if (activityLevel === "low") {
    //         if (light === "low") {
    //           // humid + windy + chance of rain + low activity + night
    //           setOutfitRecommendation({
    //             top: isCold ? sweater : tshirt,
    //             bottoms: isCold ? warmPants : longPants,
    //           });
    //         } else if (light === "medium") {
    //           // humid + windy + chance of rain + low activity + shady
    //           setOutfitRecommendation({
    //             top: isCold ? longShirt : tshirt,
    //             bottoms: isCold ? longPants : shorts,
    //           });
    //         } else {
    //           // humid + windy + chance of rain + low activity + sunny
    //           setOutfitRecommendation({
    //             accessory: sunglasses,
    //             top: isCold ? tshirt : top,
    //             bottoms: isCold ? longPants : shorts,
    //           });
    //         }
    //       } else if (activityLevel === "medium") {
    //         if (light === "low") {
    //           // humid + windy + chance of rain + medium activity + night
    //           setOutfitRecommendation({
    //             top: isCold ? longShirt : tshirt,
    //             bottoms: isCold ? warmPants : shorts,
    //           });
    //         } else if (light === "medium") {
    //           // humid + windy + chance of rain + medium activity + shady
    //           setOutfitRecommendation({
    //             top: isCold ? longShirt : top,
    //             bottoms: isCold ? longPants : shorts,
    //           });
    //         } else {
    //           // humid + windy + chance of rain + medium activity + sunny
    //           setOutfitRecommendation({
    //             accessory: sunglasses,
    //             top: isCold ? tshirt : top,
    //             bottoms: isCold ? longPants : shorts,
    //           });
    //         }
    //       } else {
    //         if (light === "low") {
    //           // humid + windy + chance of rain + high activity + night
    //           setOutfitRecommendation({
    //             top: isCold ? tshirt : top,
    //             bottoms: isCold ? warmPants : shorts,
    //           });
    //         } else if (light === "medium") {
    //           // humid + windy + chance of rain + high activity + shady
    //           setOutfitRecommendation({
    //             top: top,
    //             bottoms: isCold ? longPants : shorts,
    //           });
    //         } else {
    //           // humid + windy + chance of rain + high activity + sunny
    //           setOutfitRecommendation({
    //             accessory: (isCold && sunglasses) || undefined,
    //             top: top,
    //             bottoms: isCold ? shorts : coolShorts,
    //           });
    //         }
    //       }
    //     } else if (rain === "medium") {
    //       if (activityLevel === "low") {
    //         if (light === "low") {
    //           // humid + windy + rain + low activity + night
    //           setOutfitRecommendation({
    //            accessory: raincoat,
    //            top: isCold ? sweater : top,
    //            bottoms: isCold ? warmPants : longPants,
    //          });
    //         } else if (light === "medium") {
    //           // humid + windy + rain + low activity + shady
    //           setOutfitRecommendation({
    //            accessory: raincoat,
    //            top: isCold ? longShirt : top,
    //            bottoms: isCold ? longPants : shorts,
    //          });
    //         } else {
    //           // humid + windy + rain + low activity + sunny
    //           setOutfitRecommendation({
    //            accessory: raincoat,
    //            top: isCold ? tshirt : top,
    //            bottoms: isCold ? longPants : shorts,
    //          });
    //         }
    //       } else if (activityLevel === "medium") {
    //         if (light === "low") {
    //           // humid + windy + rain + medium activity + night
    //           setOutfitRecommendation({
    //            accessory: raincoat,
    //            top: isCold ? longShirt : top,
    //            bottoms: isCold ? warmPants : shorts,
    //          });
    //         } else if (light === "medium") {
    //           // humid + windy + rain + medium activity + shady
    //           setOutfitRecommendation({
    //            accessory: raincoat,
    //            top: isCold ? tshirt : top,
    //            bottoms: shorts,
    //          });
    //         } else {
    //           // humid + windy + rain + medium activity + sunny
    //         }
    //       } else {
    //         if (light === "low") {
    //           // humid + windy + rain + high activity + night
    //         } else if (light === "medium") {
    //           // humid + windy + rain + high activity + shady
    //         } else {
    //           // humid + windy + rain + high activity + sunny
    //         }
    //       }
    //     } else {
    //       if (activityLevel === "low") {
    //         if (light === "low") {
    //           // humid + windy + heavy rain + low activity + night
    //         } else if (light === "medium") {
    //           // humid + windy + heavy rain + low activity + shady
    //         } else {
    //           // humid + windy + heavy rain + low activity + sunny
    //         }
    //       } else if (activityLevel === "medium") {
    //         if (light === "low") {
    //           // humid + windy + heavy rain + medium activity + night
    //         } else if (light === "medium") {
    //           // humid + windy + heavy rain + medium activity + shady
    //         } else {
    //           // humid + windy + heavy rain + medium activity + sunny
    //         }
    //       } else {
    //         if (light === "low") {
    //           // humid + windy + heavy rain + high activity + night
    //         } else if (light === "medium") {
    //           // humid + windy + heavy rain + high activity + shady
    //         } else {
    //           // humid + windy + heavy rain + high activity + sunny
    //         }
    //       }
    //     }
    //   } else {
    //     if (rain === "low") {
    //       if (activityLevel === "low") {
    //         if (light === "low") {
    //           // humid + not windy + chance of rain + low activity + night
    //         } else if (light === "medium") {
    //           // humid + not windy + chance of rain + low activity + shady
    //         } else {
    //           // humid + not windy + chance of rain + low activity + sunny
    //         }
    //       } else if (activityLevel === "medium") {
    //         if (light === "low") {
    //           // humid + not windy + chance of rain + medium activity + night
    //         } else if (light === "medium") {
    //           // humid + not windy + chance of rain + medium activity + shady
    //         } else {
    //           // humid + not windy + chance of rain + medium activity + sunny
    //         }
    //       } else {
    //         if (light === "low") {
    //           // humid + not windy + chance of rain + high activity + night
    //         } else if (light === "medium") {
    //           // humid + not windy + chance of rain + high activity + shady
    //         } else {
    //           // humid + not windy + chance of rain + high activity + sunny
    //         }
    //       }
    //     } else if (rain === "medium") {
    //       if (activityLevel === "low") {
    //         if (light === "low") {
    //           // humid + not windy + rain + low activity + night
    //         } else if (light === "medium") {
    //           // humid + not windy + rain + low activity + shady
    //         } else {
    //           // humid + not windy + rain + low activity + sunny
    //         }
    //       } else if (activityLevel === "medium") {
    //         if (light === "low") {
    //           // humid + not windy + rain + medium activity + night
    //         } else if (light === "medium") {
    //           // humid + not windy + rain + medium activity + shady
    //         } else {
    //           // humid + not windy + rain + medium activity + sunny
    //         }
    //       } else {
    //         if (light === "low") {
    //           // humid + not windy + rain + high activity + night
    //         } else if (light === "medium") {
    //           // humid + not windy + rain + high activity + shady
    //         } else {
    //           // humid + not windy + rain + high activity + sunny
    //         }
    //       }
    //     } else {
    //       if (activityLevel === "low") {
    //         if (light === "low") {
    //           // humid + not windy + heavy rain + low activity + night
    //         } else if (light === "medium") {
    //           // humid + not windy + heavy rain + low activity + shady
    //         } else {
    //           // humid + not windy + heavy rain + low activity + sunny
    //         }
    //       } else if (activityLevel === "medium") {
    //         if (light === "low") {
    //           // humid + not windy + heavy rain + medium activity + night
    //         } else if (light === "medium") {
    //           // humid + not windy + heavy rain + medium activity + shady
    //         } else {
    //           // humid + not windy + heavy rain + medium activity + sunny
    //         }
    //       } else {
    //         if (light === "low") {
    //           // humid + not windy + heavy rain + high activity + night
    //         } else if (light === "medium") {
    //           // humid + not windy + heavy rain + high activity + shady
    //         } else {
    //           // humid + not windy + heavy rain + high activity + sunny
    //         }
    //       }
    //     }
    //   }
    // } else {
    //   if (isWindy) {
    //     if (rain === "low") {
    //       if (activityLevel === "low") {
    //         if (light === "low") {
    //           // not humid + windy + chance of rain + low activity + night
    //         } else if (light === "medium") {
    //           // not humid + windy + chance of rain + low activity + shady
    //         } else {
    //           // not humid + windy + chance of rain + low activity + sunny
    //         }
    //       } else if (activityLevel === "medium") {
    //         if (light === "low") {
    //           // not humid + windy + chance of rain + medium activity + night
    //         } else if (light === "medium") {
    //           // not humid + windy + chance of rain + medium activity + shady
    //         } else {
    //           // not humid + windy + chance of rain + medium activity + sunny
    //         }
    //       } else {
    //         if (light === "low") {
    //           // not humid + windy + chance of rain + high activity + night
    //         } else if (light === "medium") {
    //           // not humid + windy + chance of rain + high activity + shady
    //         } else {
    //           // not humid + windy + chance of rain + high activity + sunny
    //         }
    //       }
    //     } else if (rain === "medium") {
    //       if (activityLevel === "low") {
    //         if (light === "low") {
    //           // not humid + windy + rain + low activity + night
    //         } else if (light === "medium") {
    //           // not humid + windy + rain + low activity + shady
    //         } else {
    //           // not humid + windy + rain + low activity + sunny
    //         }
    //       } else if (activityLevel === "medium") {
    //         if (light === "low") {
    //           // not humid + windy + rain + medium activity + night
    //         } else if (light === "medium") {
    //           // not humid + windy + rain + medium activity + shady
    //         } else {
    //           // not humid + windy + rain + medium activity + sunny
    //         }
    //       } else {
    //         if (light === "low") {
    //           // not humid + windy + rain + high activity + night
    //         } else if (light === "medium") {
    //           // not humid + windy + rain + high activity + shady
    //         } else {
    //           // not humid + windy + rain + high activity + sunny
    //         }
    //       }
    //     } else {
    //       if (activityLevel === "low") {
    //         if (light === "low") {
    //           // not humid + windy + heavy rain + low activity + night
    //         } else if (light === "medium") {
    //           // not humid + windy + heavy rain + low activity + shady
    //         } else {
    //           // not humid + windy + heavy rain + low activity + sunny
    //         }
    //       } else if (activityLevel === "medium") {
    //         if (light === "low") {
    //           // not humid + windy + heavy rain + medium activity + night
    //         } else if (light === "medium") {
    //           // not humid + windy + heavy rain + medium activity + shady
    //         } else {
    //           // not humid + windy + heavy rain + medium activity + sunny
    //         }
    //       } else {
    //         if (light === "low") {
    //           // not humid + windy + heavy rain + high activity + night
    //         } else if (light === "medium") {
    //           // not humid + windy + heavy rain + high activity + shady
    //         } else {
    //           // not humid + windy + heavy rain + high activity + sunny
    //         }
    //       }
    //     }
    //   } else {
    //     if (rain === "low") {
    //       if (activityLevel === "low") {
    //         if (light === "low") {
    //           // not humid + not windy + chance of rain + low activity + night
    //         } else if (light === "medium") {
    //           // not humid + not windy + chance of rain + low activity + shady
    //         } else {
    //           // not humid + not windy + chance of rain + low activity + sunny
    //         }
    //       } else if (activityLevel === "medium") {
    //         if (light === "low") {
    //           // not humid + not windy + chance of rain + medium activity + night
    //         } else if (light === "medium") {
    //           // not humid + not windy + chance of rain + medium activity + shady
    //         } else {
    //           // not humid + not windy + chance of rain + medium activity + sunny
    //         }
    //       } else {
    //         if (light === "low") {
    //           // not humid + not windy + chance of rain + high activity + night
    //         } else if (light === "medium") {
    //           // not humid + not windy + chance of rain + high activity + shady
    //         } else {
    //           // not humid + not windy + chance of rain + high activity + sunny
    //         }
    //       }
    //     } else if (rain === "medium") {
    //       if (activityLevel === "low") {
    //         if (light === "low") {
    //           // not humid + not windy + rain + low activity + night
    //         } else if (light === "medium") {
    //           // not humid + not windy + rain + low activity + shady
    //         } else {
    //           // not humid + not windy + rain + low activity + sunny
    //         }
    //       } else if (activityLevel === "medium") {
    //         if (light === "low") {
    //           // not humid + not windy + rain + medium activity + night
    //         } else if (light === "medium") {
    //           // not humid + not windy + rain + medium activity + shady
    //         } else {
    //           // not humid + not windy + rain + medium activity + sunny
    //         }
    //       } else {
    //         if (light === "low") {
    //           // not humid + not windy + rain + high activity + night
    //         } else if (light === "medium") {
    //           // not humid + not windy + rain + high activity + shady
    //         } else {
    //           // not humid + not windy + rain + high activity + sunny
    //         }
    //       }
    //     } else {
    //       if (activityLevel === "low") {
    //         if (light === "low") {
    //           // not humid + not windy + heavy rain + low activity + night
    //         } else if (light === "medium") {
    //           // not humid + not windy + heavy rain + low activity + shady
    //         } else {
    //           // not humid + not windy + heavy rain + low activity + sunny
    //         }
    //       } else if (activityLevel === "medium") {
    //         if (light === "low") {
    //           // not humid + not windy + heavy rain + medium activity + night
    //         } else if (light === "medium") {
    //           // not humid + not windy + heavy rain + medium activity + shady
    //         } else {
    //           // not humid + not windy + heavy rain + medium activity + sunny
    //         }
    //       } else {
    //         if (light === "low") {
    //           // not humid + not windy + heavy rain + high activity + night
    //         } else if (light === "medium") {
    //           // not humid + not windy + heavy rain + high activity + shady
    //         } else {
    //           // not humid + not windy + heavy rain + high activity + sunny
    //         }
    //       }
    //     }
    //   }
    // }
  }, [weatherStats, isActive]);

  useEffect(() => generateOutfit(), []);

  return { weatherStats, outfitRecommendation };
};
