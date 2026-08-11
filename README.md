# BullismoOnline — archivio del progetto (2009–2020)

> ## ⛔ Repository di archivio. Non pubblicare da qui.
>
> **Il dominio `bullismoonline.it` non è più gestito da Ivan Ferrero.** Constatato il
> 10 agosto 2026. Il sito raggiungibile a quell'indirizzo appartiene a terzi e **non
> ha alcun rapporto con questo repository**: non ne condivide il codice, non ne
> condivide la redazione, non è pubblicato da qui.
>
> Di conseguenza: **una modifica fatta in questo repo non raggiunge nessun lettore.**
> Non trattarlo come una superficie viva in bonifiche, audit o correzioni redazionali.
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
| **14 post di esempio** | firmati `sal` o `john`, gennaio–giugno 2018: sono materiale dimostrativo del tema, **non** contenuti del progetto |

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

## Stato tecnico

- **Jekyll** con tema [Mediumish](https://www.wowthemes.net) di WowThemes.net
- Plugin richiesti: `jekyll-paginate`, `jekyll-archives`
- ⛔ **Nessun custom domain.** Il file `CNAME` è stato rimosso l'11 agosto 2026 e la
  voce *custom domain* va azzerata nelle impostazioni GitHub Pages del repository.
  Finché resta dichiarata, un account di Ivan risulta agganciato a un dominio che
  non controlla.
- `_config.yml` non contiene più un `url` di produzione: questo repo non è destinato
  a essere pubblicato.

Se un giorno si volesse rimetterlo online, va rimesso online **sotto un altro
indirizzo** e con una nota di archivio in testa a ogni pagina.

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
*Archivio congelato al 2020. Cartello di archivio aggiornato l'11 agosto 2026.*
