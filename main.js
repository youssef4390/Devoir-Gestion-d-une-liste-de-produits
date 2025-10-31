import { PRODUCTS } from "./data/products.js";

PRODUCTS.forEach((p) => console.log(p));// Affiche chaque produit dans la console


PRODUCTS.forEach((p) => console.log(p.name));// Affiche le nom de chaque produit dans la console


import { isExpired } from "./utils/date.js";// Importe la fonction isExpired de date.js

const expired = PRODUCTS.filter(p => isExpired(p.expiryDate));// Filtre les produits expires
console.log("Produits expirés :", expired);// Affiche les produits expires


const promo = PRODUCTS.filter(p => p.tags.includes("promo"));// Filtre les produits en promo
console.log("Produits en promo :", promo.map(p => p.name));// Affiche les noms des produits en promo

const sorted = [...PRODUCTS].sort((a, b) => a.price - b.price);// Trie les produits par prix croissant
console.log("Tri par prix croissant :", sorted.map(p => p.name));// Affiche les noms des produits triés par prix


const delay = (ms) => new Promise(res => setTimeout(res, ms));// fait une attente asynchrone mais j'ai pas bien saisie cette notion

const addProduct = async (list, newP) => {
  await delay(300);
  const id = Math.max(...list.map(p => p.id)) + 1;
  return [...list, { id, ...newP }];// Retourne une nouvelle liste avec le nouveau produit 
};

const newList = await addProduct(PRODUCTS, {
  name: "Savon",
  category: "Hygiène",
  price: 5,
  quantity: 10,
  expiryDate: "2026-01-01",
  tags: ["hygiene"]
});// Ajoute un nouveau produit de manière asynchrone

console.log("Après ajout :", newList.length, "produits");//cela affiche le nombre de produits apres l'ajout
console.log("les noms des produits:",PRODUCTS.map(p => p.name));//je voulais juste verifier que l'ancien tableau n'a pas ete modifie
