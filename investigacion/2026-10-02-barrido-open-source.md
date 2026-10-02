# Barrido de software y modelos libres para pymes chilenas — 2-oct-2026

Hecho por dos subagentes con las APIs públicas de GitHub, GitLab y Hugging Face (estrellas, licencia, último push y descargas, tomados ese día). Lo marcado «no verificado» no se comprobó. Las ausencias se reportan con la búsqueda y su control positivo.

## GitHub / GitLab

Advertencia: buena parte de los repositorios con actividad en 2026 se creó entre marzo y septiembre de 2026, con 0–42 estrellas y varios con `CLAUDE.md`. Que tengan push reciente no prueba que estén maduros.

| Repo | Licencia | ★ | Último push | Qué cubre |
|---|---|---|---|---|
| odoo/odoo `addons/l10n_cl` | LGPL-3 | 54.804 | 2026-10-02 | Plan de cuentas, impuestos, tipos de documento. Sin facturación electrónica en Community; `l10n_cl_edi` es Enterprise (deducido: no está en el repo público). |
| OCA/l10n-chile | AGPL-3 | 9 | 2026-09-28 (solo dotfiles) | Código solo en 12.0; ramas 14–18 vacías. |
| gitlab.com/dansanti/l10n_cl_fe | AGPL-3 | 23 | 2026-09-18 | Facturación electrónica libre para Odoo 12/14/16/17, sin 18/19. Librería `facturacion_electronica` GPL-3. POS con boleta en `l10n_cl_dte_point_of_sale`. Espejos en GitHub congelados desde 2018. |
| TuringForgeSpA/tf_dte_cl | LGPL-3 | 2 | 2026-09-28 | Odoo 18; creado ago–sep 2026. No verificado en producción. |
| bmya/odoo-bmya | no declarada | 9 | 2026-09-30 | Parches sobre `l10n_cl_edi` Enterprise. |
| KonosCL/addons-konos | GPL-3 | 18 | 2024-04-05 | Archivado. Odoo 14, plan de cuentas y remuneraciones. |
| tonicanada/erpnext_chile_factura | Apache-2.0 | 12 | 2026-09-04 | ERPNext: solo recepción y RCV vía SimpleAPI (servicio pagado). No emite. |
| LibreDTE/libredte-lib-core | AGPL-3 + términos propios | 224 | 2026-10-01 | Núcleo DTE más usado (PHP). Sus términos impiden un SaaS cerrado encima. |
| happier-milo/ruraldte-engine | Apache-2.0 | 42 | 2026-09-21 (creado 2026-09-08) | Según README: 12 tipos DTE, libros, CAF, cesión. No verificado. |
| devlas-cl/dte-sii | MIT | 29 | 2026-10-02 (creado 2026-03-20) | Boletas, CAF, libros, reclamos. |
| emisso-ai/emisso-sii | MIT | 23 | 2026-07-01 | SDK DTE, certificado, RCV. |
| cordada/lib-cl-sii-python | MIT | 37 | 2026-10-01 | Parseo y validación de DTE, RCV, RUT. |
| emisso-ai/emisso-payroll | MIT | 6 | 2026-06-21 | Motor de cálculo de remuneraciones, Ley 21.720, finiquito, archivo Previred. LRE no verificado. |
| jlobos/rut.js | MIT | 172 | 2024-11-18 | Validación de RUT. |

Ausencias (búsqueda → resultado; control):
- Tryton Chile: «tryton chile» 0; control «tryton» con resultados (incluye tryton-ar).
- iDempiere/ADempiere Chile: «idempiere chile» 0; control «idempiere» 657. La org adempiere tiene LMX, LVE, LSV, LCO, LEC, LUY; ninguna LCL.
- ERPNext emisión DTE: «erpnext chile localization» 0.
- LRE: «libro remuneraciones electronico» 0; control «remuneraciones» 135.
- F29 desde la contabilidad: solo bots de 0–1 estrella.

Huecos: Odoo 18/19 Community con facturación electrónica; remuneraciones completas con LRE; F29 de punta a punta; POS libre con boleta fuera de Odoo ≤17.

Fuentes: [ChileAtiende, facturación gratuita SII](https://www.chileatiende.gob.cl/fichas/13505-emision-de-documentos-tributarios-electronicos-dte-portal-mipyme) · [SII MIPYME](https://www.sii.cl/mipyme/facturaelectronicamipyme/opc_02.htm) · [DT, LRE](https://www.dt.gob.cl/portal/1626/w3-article-119843.html) · [Odoo 18, localización Chile](https://www.odoo.com/documentation/18.0/applications/finance/fiscal_localizations/chile.html)

## Hugging Face

| Uso | Modelo | Licencia | Nota |
|---|---|---|---|
| Documentos | ibm-granite/granite-docling-258M | Apache-2.0 | PDF/escaneo a Markdown en CPU |
| Documentos | PaddlePaddle/PaddleOCR-VL-1.6 | Apache-2.0 | OCR con tablas |
| Documentos | Qwen/Qwen3-VL-2B/4B-Instruct | Apache-2.0 | Imagen de factura a JSON |
| Documentos | Qwen/Qwen2.5-VL-3B-Instruct | qwen-research | No comercial |
| Documentos | microsoft/layoutlmv3-base | CC-BY-NC-SA-4.0 | No comercial |
| LLM | latam-gpt/Llama-3.1-70B-LatamGPT-SFT-1.0 | llama3.1 | Publicado (CENIA); 70B, no corre barato |
| LLM | google/gemma-4-E2B-it / E4B-it | Apache-2.0 | Corre en CPU |
| LLM | Qwen/Qwen3.5-0.8B/2B/4B | Apache-2.0 | Corre en CPU |
| Embeddings | Qwen/Qwen3-Embedding-0.6B · BAAI/bge-m3 · intfloat/multilingual-e5-small | Apache / MIT / MIT | Búsqueda en documentos y clasificación |
| Voz | openai/whisper-large-v3-turbo · Systran/faster-whisper-small · nvidia/parakeet-tdt-0.6b-v3 | MIT / MIT / CC-BY-4.0 | Transcripción |
| Datos | pablobenavidesj/doctrina-jurisprudencia-chile | other | Jurisprudencia chilena |

Ausencias: «boleta» 0 y «cartola» 0 en modelos y datasets; control «factura» trajo resultados dominicanos y argentinos. Nada entrenado en documentos tributarios chilenos.

Lectura: la factura electrónica ya es XML y el SII entrega el RCV, así que leerla con IA no aporta. Los modelos libres ganan en transcripción, embeddings y privacidad cuando el cliente la pide; la Ley 21.719 (desde 1-dic-2026) no obliga a usarlos.
