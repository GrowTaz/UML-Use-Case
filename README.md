# UML-Use-Case
![uml](https://github.com/GrowTaz/UML-Use-Case/assets/74216872/4ae8e476-5436-44fb-80e7-54b984d37902)



# Käyttötapauskuvaukset

## Käyttäjä

### 1. Käyttötapaus: Selaa äänestyksiä

- **Käyttötapauksen nimi:** Selaa äänestyksiä
- **Käyttäjät:** Käyttäjä
- **Laukaisija:** Käyttäjä haluaa nähdä saatavilla olevat äänestykset.
- **Esiehto:** 
- **Jälkiehto:** Käyttäjä näkee listan saatavilla olevista äänestyksistä.
- **Käyttötapauksen kulku:** 
  1. Käyttäjälle näytetään äänestysnäkymä sivun ladatessa.
- **Poikkeuksellinen toiminta:** 

### 2. Käyttötapaus: Valita äänestyksen ja katsoa äänestystilanne

- **Käyttötapauksen nimi:** Valita äänestyksen ja katsoa äänestystilanne
- **Käyttäjät:** Käyttäjä
- **Laukaisija:** Käyttäjä haluaa nähdä tietyn äänestyksen äänestystilanteen.
- **Esiehto:** Käyttäjä painaa "katso tilanne painiketta" 
- **Jälkiehto:** Käyttäjä näkee valitun äänestyksen äänestystilanteen.
- **Käyttötapauksen kulku:** 
  1. Järjestelmä näyttää äänestystilanteen.
- **Poikkeuksellinen toiminta:** 

### 3. Käyttötapaus: Äänestä valitsemaansa äänestystä

- **Käyttötapauksen nimi:** Äänestä valitsemaansa äänestystä
- **Käyttäjät:** Käyttäjä
- **Laukaisija:** Käyttäjä haluaa äänestää valitsemaansa äänestystä.
- **Esiehto:** Käyttäjä on valinnut äänestyksen.
- **Jälkiehto:** 
- **Käyttötapauksen kulku:** 
  1. Käyttäjä valitsee vaihtoehdon äänestyksessä.
  2. Järjestelmä rekisteröi äänen.
- **Poikkeuksellinen toiminta:** Käyttäjä on jo äänestänyt.

## Ylläpitäjä

### 4. Käyttötapaus: Selaa äänestyksiä

- **Käyttötapauksen nimi:** Selaa äänestyksiä
- **Käyttäjät:** Ylläpitäjä
- **Laukaisija:** Ylläpitäjä haluaa nähdä saatavilla olevat äänestykset.
- **Esiehto:** 
- **Jälkiehto:** Ylläpitäjä näkee listan saatavilla olevista äänestyksistä.
- **Käyttötapauksen kulku:** 
  1. Ylläpitäjälle näytetään äänestysnäkymä sivun ladatessa.
- **Poikkeuksellinen toiminta:** 


### 5. Käyttötapaus: Valita äänestyksen ja katsoa äänestystilanne

- **Käyttötapauksen nimi:** Valita äänestyksen ja katsoa äänestystilanne
- **Käyttäjät:** Ylläpitäjä
- **Laukaisija:** Ylläpitäjä haluaa nähdä tietyn äänestyksen äänestystilanteen.
- **Esiehto:** Ylläpitäjä painaa "katso tilanne painiketta" 
- **Jälkiehto:** Ylläpitäjä näkee valitun äänestyksen äänestystilanteen.
- **Käyttötapauksen kulku:** 
  1. Järjestelmä näyttää äänestystilanteen.
- **Poikkeuksellinen toiminta:** 

### 6. Käyttötapaus: Äänestä valitsemaansa äänestystä

- **Käyttötapauksen nimi:** Äänestä valitsemaansa äänestystä
- **Käyttäjät:** Ylläpitäjä
- **Laukaisija:** Ylläpitäjä haluaa äänestää valitsemaansa äänestystä.
- **Esiehto:** Ylläpitäjä on valinnut äänestyksen.
- **Jälkiehto:** 
- **Käyttötapauksen kulku:** 
  1. Ylläpitäjä valitsee vaihtoehdon äänestyksessä.
  2. Järjestelmä rekisteröi äänen.
- **Poikkeuksellinen toiminta:** Ylläpitäjä on jo äänestänyt.

### 7. Käyttötapaus: Tee uusi äänestys

- **Käyttötapauksen nimi:** Tee uusi äänestys
- **Käyttäjät:** Ylläpitäjä
- **Laukaisija:** Ylläpitäjä haluaa luoda uuden äänestyksen.
- **Esiehto:** Ylläpitäjä on kirjautunut sisään.
- **Jälkiehto:** Uusi äänestys on luotu ja se on saatavilla käyttäjille.
- **Käyttötapauksen kulku:** 
  1. Ylläpitäjä valitsee "Luo uusi äänestys" vaihtoehdon.
  2. Ylläpitäjä syöttää äänestyksen tiedot.
  3. Ylläpitäjä vahvistaa äänestyksen luomisen.
  4. Järjestelmä luo uuden äänestyksen.
- **Poikkeuksellinen toiminta:** 

### 8. Käyttötapaus: Poista äänestys

- **Käyttötapauksen nimi:** Poista äänestys
- **Käyttäjät:** Ylläpitäjä
- **Laukaisija:** Ylläpitäjä haluaa poistaa olemassa olevan äänestyksen.
- **Esiehto:** Ylläpitäjä on kirjautunut sisään ja valinnut äänestyksen.
- **Jälkiehto:** Äänestys on poistettu.
- **Käyttötapauksen kulku:** 
  1. Ylläpitäjä valitsee äänestyksen listasta.
  2. Ylläpitäjä valitsee "Poista äänestys" -vaihtoehdon.
  3. Järjestelmä poistaa valitun äänestyksen.
- **Poikkeuksellinen toiminta:** 

