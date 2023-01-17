import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Espaces = () => {
  return (
    <div className="flex flex-wrap mt-10 mx-1">

  <div class="w-1/3 p-4">
    <div class="bg-white rounded-lg overflow-hidden shadow-md">
    <div href="#" class="block h-70 rounded-t-lg overflow-hidden">
        <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="card image"></img>
      </div>
      <div class="p-4">
        <h4 class="text-lg font-medium text-gray-800">Espace Etudiant</h4>
        <p class="text-gray-600 mt-2">Vous êtes étudiant à l'Ecole Nationale des Sciences Appliquées de Kénitra, la plateforme est l’outil idoine pour renforcer vos chances de décrocher votre emploi ou votre stage.</p>
        <div class="mt-4 flex justify-between">
          <button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            
            <Link to="/login">Connecter</Link>
            </button>
          <button class="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600">
          <Link to="/register_etudiant">S'incrire</Link>
        </button>
        </div>
      </div>
    </div>
  </div>

  <div class="w-1/3 p-4">
    <div class="bg-white rounded-lg overflow-hidden shadow-md">
    <div href="#" class="block h-70 rounded-t-lg overflow-hidden">
        <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="card image"></img>
      </div>
      <div class="p-4">
        <h4 class="text-lg font-medium text-gray-800">Espace Entreprise</h4>
        <p class="text-gray-600 mt-2">Vous êtes responsable RH dans une entreprise et vous cherchez à recruter un étudiant à l'Ecole Nationale des Sciences Appliquées de Kénitra</p>
        <div class="mt-4 flex justify-between">
          <button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"><Link to="/login">Connecter</Link></button>
          <button class="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600">
          <Link to="/register_entreprise">S'incrire</Link>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="w-1/3 p-4">
    <div class="bg-white rounded-lg overflow-hidden shadow-md">
    <div href="#" class="block h-70 rounded-t-lg overflow-hidden">
        <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="card image"></img>
      </div>
      <div class="p-4">
        <h4 class="text-lg font-medium text-gray-800">Espace Enseignat</h4>
        <p class="text-gray-600 mt-2">Vous êtes étudiant à l'Ecole Nationale des Sciences Appliquées de Kénitra, la plateforme est l’outil ideal pour encadrer des etudiants dans ces stage.</p>
        <div class="mt-4 flex justify-between">
          <button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"><Link to="/login">Connecter</Link></button>
          <button class="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600">
          <Link to="/register_enseignat">S'incrire</Link>
          </button>
        </div>
      </div>
    </div>
  </div>

  </div>
  )
}

export default Espaces