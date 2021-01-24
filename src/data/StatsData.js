import React from "react"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

export const StatsData = [
  {
    icon: (
      <GiEarthAmerica
        css={`
          color: #047bf1;
        `}
      />
    ),
    title: "Plus de 100 destinations",
    desc: "Voyager dans plus de 100 lieux uniques",
  },
  {
    icon: (
      <MdAirplanemodeActive
        css={`
          color: #f3a82e;
        `}
      />
    ),
    title: "1 million de voyages effectués",
    desc: "Plus d'un million de voyages effectués l'année dernière",
  },
  {
    icon: (
      <MdTimer
        css={`
          color: #f34f2e;
        `}
      />
    ),
    title: "Un support rapide",
    desc: "Contactez le support pour obtenir de l'aide",
  },
  {
    icon: (
      <FaMoneyCheck
        css={`
          color: #3af576;
        `}
      />
    ),
    title: "La meilleure affaire",
    desc: "Chaque jours, découvrez des deals incroyables",
  },
]
