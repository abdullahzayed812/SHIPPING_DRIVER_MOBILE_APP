import React, { useEffect } from "react";
import { Splash } from "../../components/Splash";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type {
  RootStackParamList,
  SplashStackParamList,
} from "../../navigation/types";
import { loadAppLanguage, loadUserData } from "../../helpers/asyncStorage";
import { changeLanguage } from "i18next";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export const SplashScreen: React.FC<Props> = ({ navigation }) => {
  const loadLanguage = async () => {
    try {
      const userData = await loadUserData();
      const language = await loadAppLanguage();
      if (language) {
        changeLanguage(language);
        if (userData?.id) {
          navigation.reset({ routes: [{ name: "TabStackScreen" }] });
        } else {
          navigation.reset({ routes: [{ name: "AuthStackScreen" }] });
        }
      } else {
        changeLanguage("en");
        navigation.reset({
          routes: [
            {
              name: "Splash",
              state: { routes: [{ name: "ChooseLangScreen" }] },
            },
          ],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadLanguage();

    let timer = setTimeout(loadLanguage, 2000);

    return () => clearTimeout(timer);

    // let timerID = setTimeout(
    //   () => navigation.reset({ routes: [{ name: "IntroductionScreen" }] }),
    //   2000,
    // );

    // return () => clearTimeout(timerID);
  }, []);

  return <Splash />;
};
