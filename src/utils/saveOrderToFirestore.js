import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";

export const saveOrderToFirestore = async (buyer, items) => {
  try {
    const order = {
      buyer: {
        name: buyer.name,
        email: buyer.email,
        phone: buyer.phone,
        date: new Date().toISOString(), // Fecha actual
      },
      items: items.map((item) => ({
        id: item.id,
        title: item.title || "Sin título",
        price: item.price || 0,
        pantalones: item.pantalones || "",
      })),
    };

    const docRef = await addDoc(collection(db, "orders"), order);
    console.log("Orden guardada con ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error al guardar la orden: ", error);
    throw new Error("No se pudo completar la orden");
  }
};
