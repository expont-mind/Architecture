import { getVideoUrl, getImageUrl } from "@/lib/cdn-config";

export const MAIN_ANIMATION = {
  id: "main-animation",
  src: getVideoUrl("/renders/Hero_2-2.mp4"),
};

export const houseA = [
  {
    id: "houseA-exterior1",
    label: "Exterior 1",
    introSrc: getVideoUrl("/renders/HouseA_0-1.mp4"),
    loopSrc: getVideoUrl("/renders/HouseA_1-1.mp4"),
    preview: getImageUrl("/images/HouseA_1.webp"),
    reverseTransition2: getVideoUrl("/renders/HouseA_2-1.mp4"),
    wrapTransition: getVideoUrl("/renders/HouseA_1-4.mp4"),
    transitionTo3: getVideoUrl("/renders/HouseA_1-3.mp4"),
  },
  {
    id: "houseA-exterior2",
    label: "Exterior 2",
    introSrc: getVideoUrl("/renders/HouseA_1-2.mp4"),
    loopSrc: getVideoUrl("/renders/HouseA_2-2.mp4"),
    preview: getImageUrl("/images/HouseA_2.webp"),
    reverseTransition: getVideoUrl("/renders/HouseA_3-2.mp4"),
    reverseTransition2: getVideoUrl("/renders/HouseA_2-1.mp4"),
    transitionTo4: getVideoUrl("/renders/HouseA_2-4.mp4"),
  },
  {
    id: "houseA-exterior3",
    label: "Exterior 3",
    introSrc: getVideoUrl("/renders/HouseA_2-3.mp4"),
    loopSrc: getVideoUrl("/renders/HouseA_3-3.mp4"),
    preview: getImageUrl("/images/HouseA_3.webp"),
    reverseTransition: getVideoUrl("/renders/HouseA_3-2.mp4"),
    transitionTo1: getVideoUrl("/renders/HouseA_3-1.mp4"),
  },
  {
    id: "houseA-exterior4",
    label: "Exterior 4",
    introSrc: getVideoUrl("/renders/HouseA_3-4.mp4"),
    loopSrc: getVideoUrl("/renders/HouseA_4-4.mp4"),
    preview: getImageUrl("/images/HouseA_4.webp"),
    reverseTransition: getVideoUrl("/renders/HouseA_4-3.mp4"),
    wrapTransition: getVideoUrl("/renders/HouseA_4-1.mp4"),
    transitionTo2: getVideoUrl("/renders/HouseA_4-2.mp4"),
  },
];

export const houseB = [
  {
    id: "houseB-exterior1",
    label: "Exterior 1",
    introSrc: getVideoUrl("/renders/HouseB_0-1.mp4"),
    loopSrc: getVideoUrl("/renders/HouseB_1-1.mp4"),
    preview: getImageUrl("/images/HouseB_1.webp"),
    reverseTransition2: getVideoUrl("/renders/HouseB_2-1.mp4"),
    wrapTransition: getVideoUrl("/renders/HouseB_1-4.mp4"),
    transitionTo3: getVideoUrl("/renders/HouseB_1-3.mp4"),
  },
  {
    id: "houseB-exterior2",
    label: "Exterior 2",
    introSrc: getVideoUrl("/renders/HouseB_1-2.mp4"),
    loopSrc: getVideoUrl("/renders/HouseB_2-2.mp4"),
    preview: getImageUrl("/images/HouseB_2.webp"),
    reverseTransition: getVideoUrl("/renders/HouseB_3-2.mp4"),
    reverseTransition2: getVideoUrl("/renders/HouseB_2-1.mp4"),
    transitionTo4: getVideoUrl("/renders/HouseB_2-4.mp4"),
  },
  {
    id: "houseB-exterior3",
    label: "Exterior 3",
    introSrc: getVideoUrl("/renders/HouseB_2-3.mp4"),
    loopSrc: getVideoUrl("/renders/HouseB_3-3.mp4"),
    preview: getImageUrl("/images/HouseB_3.webp"),
    reverseTransition: getVideoUrl("/renders/HouseB_3-2.mp4"),
    transitionTo1: getVideoUrl("/renders/HouseB_3-1.mp4"),
  },
  {
    id: "houseB-exterior4",
    label: "Exterior 4",
    introSrc: getVideoUrl("/renders/HouseB_3-4.mp4"),
    loopSrc: getVideoUrl("/renders/HouseB_4-4.mp4"),
    preview: getImageUrl("/images/HouseB_4.webp"),
    reverseTransition: getVideoUrl("/renders/HouseB_4-3.mp4"),
    wrapTransition: getVideoUrl("/renders/HouseB_4-1.mp4"),
    transitionTo2: getVideoUrl("/renders/HouseB_4-2.mp4"),
  },
];

export const playground = [
  {
    id: "playground-exterior1",
    label: "Exterior 1",
    introSrc: getVideoUrl("/renders/Playground_0-1.mp4"),
    loopSrc: getVideoUrl("/renders/Playground_1-1.mp4"),
    preview: getImageUrl("/images/Playground_1.webp"),
    reverseTransition2: getVideoUrl("/renders/Playground_2-1.mp4"),
    wrapTransition: getVideoUrl("/renders/Playground_1-4.mp4"),
    transitionTo3: getVideoUrl("/renders/Playground_1-3.mp4"),
  },
  {
    id: "playground-exterior2",
    label: "Exterior 2",
    introSrc: getVideoUrl("/renders/Playground_1-2.mp4"),
    loopSrc: getVideoUrl("/renders/Playground_2-2.mp4"),
    preview: getImageUrl("/images/Playground_2.webp"),
    reverseTransition: getVideoUrl("/renders/Playground_3-2.mp4"),
    reverseTransition2: getVideoUrl("/renders/Playground_2-1.mp4"),
    transitionTo4: getVideoUrl("/renders/Playground_2-4.mp4"),
  },
  {
    id: "playground-exterior3",
    label: "Exterior 3",
    introSrc: getVideoUrl("/renders/Playground_2-3.mp4"),
    loopSrc: getVideoUrl("/renders/Playground_3-3.mp4"),
    preview: getImageUrl("/images/Playground_3.webp"),
    reverseTransition: getVideoUrl("/renders/Playground_3-2.mp4"),
    transitionTo1: getVideoUrl("/renders/Playground_3-1.mp4"),
  },
  {
    id: "playground-exterior4",
    label: "Exterior 4",
    introSrc: getVideoUrl("/renders/Playground_3-4.mp4"),
    loopSrc: getVideoUrl("/renders/Playground_4-4.mp4"),
    preview: getImageUrl("/images/Playground_4.webp"),
    reverseTransition: getVideoUrl("/renders/Playground_4-3.mp4"),
    wrapTransition: getVideoUrl("/renders/Playground_4-1.mp4"),
    transitionTo2: getVideoUrl("/renders/Playground_4-2.mp4"),
  },
];

export const houseAMeta = {
  plot: 890,
  house: 168.8,
  price: "300M",
  rooms: [
    { label: "Kitchen", size: "9 м²" },
    { label: "Garage", size: "26 м²" },
    { label: "Living Room", size: "23 м²" },
    { label: "Bedroom 1", size: "19 м²" },
    { label: "Bedroom 2", size: "17 м²" },
    { label: "Wardrobe", size: "3.6 м²" },
    { label: "Cabinet", size: "3.5 м²" },
  ],
  documentation: "HOUSE_A_DOCUMENTATION.PDF",
};

export const houseBMeta = {
  plot: 720,
  house: 140.2,
  price: "250M",
  rooms: [
    { label: "Kitchen", size: "8 м²" },
    { label: "Living Room", size: "20 м²" },
    { label: "Bedroom 1", size: "16 м²" },
    { label: "Bedroom 2", size: "14 м²" },
    { label: "Bathroom", size: "5 м²" },
  ],
  documentation: "HOUSE_B_DOCUMENTATION.PDF",
};

export const playgroundMeta = {
  plot: 1200,
  house: 95,
  price: "180M",
  rooms: [
    { label: "Open Space", size: "50 м²" },
    { label: "Garage", size: "18 м²" },
    { label: "Storage", size: "12 м²" },
  ],
  documentation: "PLAYGROUND_DOCUMENTATION.PDF",
};
