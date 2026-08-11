# BullismoOnline — archivio del progetto (2009–2020)

> ## ⛔ Repository di archivio. Non pubblicare da qui.
>
> **Il dominio `bullismoonline.it` non è più gestito da Ivan Ferrero.** Constatato il
> 10 agosto 2026. Il sito raggiungibile a quell'indirizzo appartiene a terzi e **non
> ha alcun rapporto con questo repository**: non ne condivide il codice, non ne
> condivide la redazione, non è pubblicato da qui.
>
> **Aggiornamento 11/08/2026:** l'archivio è ora pubblicato su
> https://ivanpsy.github.io/bullismoonline/ con una fascia di archivio in cima a ogni pagina.
> Quindi una modifica committata qui **raggiunge i lettori dell'archivio**, ma non raggiunge
> nessuno su `bullismoonline.it`, che è un sito di terzi. Tenere distinte le due cose.
>
> Perché questo cartello esiste: il 10/08/2026 una bonifica su un dato anagrafico ha
> corretto e committato il footer di questo layout *prima* di accorgersi che il dominio
> non era più di Ivan. Lavoro perso. Senza un marcatore visibile, la volta dopo ci si
> ricasca.
>
> ⚠️ **Chi cita questo progetto in una bio, in un media kit o in una presentazione** deve
> usare la forma al passato e senza dominio: «Ho fondato e diretto dal 2009 un portale
> divulgativo sulla sicurezza digitale e sul cyberbullismo». Nominare l'indirizzo manda
> chi verifica su un sito che Ivan non controlla.

---

## Cos'era

**BullismoOnline** è nato nel 2009 come uno dei primi presìdi divulgativi italiani
dedicati al cyberbullismo, in un momento in cui in Italia il fenomeno non aveva ancora
un nome condiviso, né una legge (la 71/2017 sarebbe arrivata otto anni dopo), né
materiali per genitori e insegnanti scritti da chi lavorava con gli adolescenti.

La tesi del progetto, tenuta per undici anni, era che il cyberbullismo non fosse un
problema di tecnologia da spegnere ma **la convergenza di un disagio** che passa
attraverso il digitale perché è lì che gli adolescenti vivono le relazioni. Da qui
l'impostazione: mai allarmismo, mai «togliete il cellulare», sempre il tentativo di
rendere leggibile ai grandi ciò che i ragazzi già facevano.

Il lettore era doppio: **genitori e insegnanti**, con contenuti pensati per essere
usati il giorno dopo, non per essere ammirati.

## Cosa c'è dentro

Questo repository è la versione Jekyll del sito, congelata all'ultimo aggiornamento
del 2020. Contiene:

| | |
|---|---|
| **48 articoli originali** | in `_posts/`, dal 2 settembre 2014 al 22 settembre 2020 |
| **Pagine editoriali** | `chi-siamo.md`, `libri-cyberbullismo.md`, `ricerche-scientifiche-cyberbullismo.md`, `risorse-bullismo-online.md`, `contatti.html` |
| **Documenti legali d'epoca** | privacy policy, privacy estesa, cookie policy, GDPR policy |
| **Media** | `assets/` e `wp-content/uploads/` — l'eredità della precedente installazione WordPress, da cui il sito è stato migrato |
| **14 post di esempio** | firmati `sal` o `john`, gennaio–giugno 2018: materiale dimostrativo del tema Mediumish, **non** contenuti del progetto. Spostati in `_theme-demo/` l'11/08/2026, fuori dal build |

I contenuti antecedenti al 2014 (2009–2013) non sono in questo repository: vivevano
sull'installazione WordPress originale e non sono sopravvissuti alla migrazione.

### Redazione

Il progetto non è stato un blog personale. Oltre a Ivan Ferrero (42 articoli), hanno
firmato:

- **Mariarosaria Imbimbo**, psicologa psicoterapeuta — 4 articoli
- **Alessia Sorgato**, avvocato penalista — 1 articolo (l'analisi della legge 71/2017)
- **Alessandra Fabriani**, neuropsicomotricista — 1 articolo

I loro pezzi restano di loro titolarità. Vedi `LICENSE`.

### Alcuni pezzi che reggono ancora

- *Cos'è il Cyberbullismo? L'Idra 2.0* (2016) — la metafora che ha retto tutta l'impostazione del progetto
- *Glossario del Cyberbullismo e del Web dei nostri Adolescenti* (2014)
- *Hikikomori: quando l'adolescenza diventa isolamento e perdita di Sé* (2015)
- *Come ho usato Clash of Clans per iniziare con un adolescente* (2017)
- *Cyberbullismo e la Legge: perché è così difficile?* (2016)

## La nota introduttiva

`archivio.md` → **[/archivio/](https://ivanpsy.github.io/bullismoonline/archivio/)**, scritta
l'11 agosto 2026 e linkata dalla fascia di archivio in cima a ogni pagina e dal menu.

È il documento pubblico che spiega cos'era BullismoOnline, perché oggi è un archivio, e che
contiene la riga chiave:

> Il dominio `bullismoonline.it` non è più mio, e il sito che ci sta sopra oggi non ha nulla
> a che fare con me.

Se un giorno serve mandare qualcuno a un solo indirizzo (un giornalista, un committente, un
collega che ha trovato i testi altrove), è quello.

## Inventario e prova di paternità

Fuori dal repository, in `Documents/divulgazione/bullismoonline/`:

| File | Cosa contiene |
|---|---|
| `dossier-bullismoonline-2026-08-11.md` | Il rilievo della ripubblicazione dei contenuti sul dominio di terzi |
| `triage-editoriale-archivio-2026-08-11.md` | Triage dei 48 articoli in tre pile: 14 ancora validi, 18 datati ma interessanti, 16 da lasciare fuori |
| `semi-osservatorio-da-bullismoonline.md` | Angoli retrospettivi per l'Osservatorio |
| `prove/archivio-paternita.txt` | `git log --reverse` di `_posts/` |
| `prove/archivio-paternita-esteso.txt` | Log esteso con hash, email e primo commit di ogni file |
| `prove/inventario-archivio.md` | Inventario completo: data, titolo, autore, categorie, lunghezza |

⚠️ **Un avvertimento sul valore probatorio del log git.** La storia di questo repository
comincia il **7 febbraio 2019** con il commit iniziale firmato `sharath Kumar`, lo
sviluppatore che fece la migrazione da WordPress a Jekyll. **Tutti i 41 articoli dal 2014 al
2018 sono entrati in quel singolo commit**, non uno per uno alla loro data. Solo gli 11
articoli dal luglio 2019 in poi hanno un commit datato e firmato `IvanPsy` che coincide con
la scrittura.

Quindi il log git prova il **possesso del corpus dal febbraio 2019**, che è comunque sette
anni prima della copia, e l'autorialità diretta sui pezzi 2019-2020. Per il nucleo 2014-2018
serve altro: le cartelle `wp-content/uploads/` con la struttura anno/mese dal 2014 al 2018
(la media library WordPress migrata), le fatture di dominio e hosting in `vita/finanze`, e le
istantanee Wayback del sito originale.

## Stato tecnico

- **Jekyll** con tema [Mediumish](https://www.wowthemes.net) di WowThemes.net
- Plugin richiesti: `jekyll-paginate`, `jekyll-archives`
- ⛔ **Nessun custom domain.** Il file `CNAME` è stato rimosso l'11 agosto 2026 e il
  *custom domain* è stato azzerato nelle impostazioni GitHub Pages. Finché era dichiarato,
  `ivanpsy.github.io/bullismoonline/` rispondeva **302 verso `www.bullismoonline.it/`**:
  era GitHub a consegnare al sito di terzi il traffico che arrivava dall'account di Ivan.
- ✅ **L'archivio è pubblicato** su https://ivanpsy.github.io/bullismoonline/, con una
  **fascia di archivio visibile in cima a ogni pagina** (`_layouts/default.html`) che dichiara
  il periodo dei contenuti, la perdita del dominio e la licenza. È una scelta deliberata: dà
  a Ivan un indirizzo pubblico e sotto il suo controllo dove gli originali stanno con date,
  firme e licenza in chiaro.
- ⚠️ `baseurl: /bullismoonline` in `_config.yml` **non va tolto**: è un project site, senza
  baseurl CSS, JavaScript e link interni si rompono in silenzio.
- Google Analytics rimosso dal layout l'11/08/2026 (era una property Universal, dismessa da
  Google nel 2023, e su un archivio non serve).

Quindi sì, da qui si pubblica: al contrario di quanto valeva fino al 10/08, una modifica
committata qui **adesso raggiunge un lettore**. Ma raggiunge i lettori dell'archivio, non
quelli di `bullismoonline.it`.

## Licenza

Due licenze diverse, per due cose diverse. Il dettaglio completo è in [`LICENSE`](LICENSE).

- **Testi degli articoli e delle pagine** → [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.it).
  Si possono condividere citando l'autore e collegando questo repository, non per scopi
  commerciali, senza modificarli. Riscrittura e parafrasi automatica rientrano nelle
  opere derivate, e non sono consentite.
- **Codice e tema** → MIT (WowThemes.net, e le modifiche successive). Testo originale in
  [`THEME-LICENSE.txt`](THEME-LICENSE.txt).
- **Immagini di terzi** in `assets/` e `wp-content/` → dei rispettivi proprietari, non
  ri-licenziate qui.
- **Il nome «BullismoOnline»** e l'identità visiva non sono coperti dalla licenza CC.

Per usi che eccedono la licenza: [ivanferrero.it](https://ivanferrero.it)

---

*Ivan Ferrero — psicologo psicoterapeuta, cyberpsicologo.*
*Archivio congelato al 2020. Cartello di archivio, nota introduttiva e triage editoriale: 11 agosto 2026.*
