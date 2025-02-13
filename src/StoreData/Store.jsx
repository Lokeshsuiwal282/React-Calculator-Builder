import { create } from "zustand";

const useCalculatorStore = create((set) => ({
  components: [
    { id: 1, type: "button", value: "AC" },
    { id: 2, type: "button", value: "%" },
    { id: 3, type: "button", value: "C" },
    { id: 4, type: "button", value: "/" },

    { id: 5, type: "button", value: "7" },
    { id: 6, type: "button", value: "8" },
    { id: 7, type: "button", value: "9" },
    { id: 8, type: "button", value: "*" },

    { id: 9, type: "button", value: "4" },
    { id: 10, type: "button", value: "5" },
    { id: 11, type: "button", value: "6" },
    { id: 12, type: "button", value: "-" },

    { id: 13, type: "button", value: "1" },
    { id: 14, type: "button", value: "2" },
    { id: 15, type: "button", value: "3" },
    { id: 16, type: "button", value: "+" },

    { id: 17, type: "button", value: "00" },
    { id: 18, type: "button", value: "0" },
    { id: 19, type: "button", value: "." },
    { id: 20, type: "button", value: "=" },

  ],

  addComponent: (component) =>
    set((state) => ({ components: [...state.components, component] })),
  removeComponent: (id) =>
    set((state) => ({ components: state.components.filter((c) => c.id !== id) })),
}));

export default useCalculatorStore;
