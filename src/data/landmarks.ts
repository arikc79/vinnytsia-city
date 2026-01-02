export interface Landmark {
  id: number;
  title: string;
  wikiTitle: string;
}

export const landmarks: Landmark[] = [
  {
    id: 1,
    title: "Фонтан Roshen",
   
    // ✅ Vinnytsia Roshen Multimedia Fountain — стабільна
    wikiTitle: "Vinnytsia Roshen Multimedia Fountain",
  },
  {
    id: 2,
    title: "Музей-садиба Пирогова",
    wikiTitle: "National Pirogov Memorial Medical Museum",
  },
  {
    id: 3,
    title: "Вежа Артинова",
    wikiTitle: "Artinov Tower",
  },
];
