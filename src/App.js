import React, { useState } from "react";
import "./form.css";

export default function App() {
  const [form, setForm] = useState({
    // SECCIÓN A
    nombreA: "",
    edadA: "",
    profesionA: "",
    ciudadEstadoA: "",
    situacionA: {
      detenido: false,
      liberado: false,
      fallecido: false,
    },

    // SECCIÓN B
    nombreB: "",
    relacionB: "",
    otroRelacionB: "",
    contactoB: "",

    // SECCIÓN C
    fechaDetencionC: "",
    lugarDetencionC: "",
    centrosC: "",
    fechaLiberacionC: "",

    // SECCIÓN D
    fechaFallecimientoD: "",
    lugarFallecimientoD: "",
    causaOficialD: "",
    recibioCuerpoD: "",
    investigacionD: "",

    // SECCIÓN E
    motivoOficialE: "",
    motivoRealE: "",

    // SECCIÓN F
    verificacionF: {
      prensa: false,
      ong: false,
      judicial: false,
      defuncion: false,
      testimonio: false,
      otro: false,
    },
    otroFDescripcion: "",

    // SECCIÓN G
    impactoG: {
      dificilVolver: "",
      cambioSiempre: "",
      inconcluso: "",
      cambioFamilia: "",
      dedicabaAntes: "",
      diaNormal: "",
      extranio: "",
      dificilAceptar: "",
      cambioVision: "",
    },

    // SECCIÓN H
    autorizaNombre: "",
    autorizaImagen: "",
    testimonios: {
      textuales: false,
      editados: false,
      noAutoriza: false,
    },
    noPublicar: "",
  });

  function update(path, value) {
    setForm((prev) => {
      const obj = { ...prev };
      const parts = path.split(".");
      let ref = obj;

      for (let i = 0; i < parts.length - 1; i++) {
        ref = ref[parts[i]];
      }
      ref[parts[parts.length - 1]] = value;
      return obj;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Formulario enviado.");
  }

  return (
    <div className="container">
      <h2>RECEPCIÓN · VERIFICACIÓN · CUIDADO HUMANO</h2>
      <h3>EL PRECIO DE RESISTIR</h3>
      <p>
        Registro de personas detenidas por razones políticas. Nada será
        publicado sin verificación y consentimiento explícito.
      </p>

      <form onSubmit={handleSubmit}>
        {/* SECCIÓN A */}
        <section>
          <h4>SECCIÓN A — Identidad de la persona afectada (OBLIGATORIA)</h4>

          <input
            placeholder="Nombre completo"
            value={form.nombreA}
            onChange={(e) => update("nombreA", e.target.value)}
          />

          <input
            placeholder="Edad"
            value={form.edadA}
            onChange={(e) => update("edadA", e.target.value)}
          />

          <input
            placeholder="Profesión / ocupación antes de la detención"
            value={form.profesionA}
            onChange={(e) => update("profesionA", e.target.value)}
          />

          <input
            placeholder="Ciudad y estado de origen"
            value={form.ciudadEstadoA}
            onChange={(e) => update("ciudadEstadoA", e.target.value)}
          />
          {/* Photo Upload for Section A */}
<label style={{ marginTop: "10px", fontWeight: "bold" }}>
  Adjuntar foto (solo .jpeg, máximo 5000 KB)
</label>

<input
  type="file"
  accept=".jpeg,image/jpeg"
  onChange={(e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (file.type !== "image/jpeg") {
      alert("Solo se permiten archivos .jpeg");
      e.target.value = "";
      return;
    }

    // Validate file size (100KB max)
    if (file.size > 5000 * 1024) {
      alert("El archivo debe ser menor de 5000 KB");
      e.target.value = "";
      return;
    }

    // Save photo
    update("fotoA", file);
  }}
/>

          <label>Situación actual:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={form.situacionA.detenido}
                onChange={(e) =>
                  update("situacionA.detenido", e.target.checked)
                }
              />{" "}
              Detenido/a
            </label>

            <label>
              <input
                type="checkbox"
                checked={form.situacionA.liberado}
                onChange={(e) =>
                  update("situacionA.liberado", e.target.checked)
                }
              />{" "}
              Liberado/a
            </label>

            <label>
              <input
                type="checkbox"
                checked={form.situacionA.fallecido}
                onChange={(e) =>
                  update("situacionA.fallecido", e.target.checked)
                }
              />{" "}
              Fallecido/a durante la detención
            </label>
          </div>
        </section>

        {/* SECCIÓN B */}
        <section>
          <h4>SECCIÓN B — Quién envía la información (OBLIGATORIA)</h4>

          <input
            placeholder="Nombre completo"
            value={form.nombreB}
            onChange={(e) => update("nombreB", e.target.value)}
          />

          <label>Relación con la persona:</label>
          <select
            value={form.relacionB}
            onChange={(e) => update("relacionB", e.target.value)}
          >
            <option value="">Seleccione</option>
            <option value="Detenida">La persona detenida</option>
            <option value="Familiar directo">Familiar directo</option>
            <option value="Abogado/a">Abogado/a</option>
            <option value="Otro">Otro (especificar)</option>
          </select>

          {form.relacionB === "Otro" && (
            <input
              placeholder="Especificar relación"
              value={form.otroRelacionB}
              onChange={(e) => update("otroRelacionB", e.target.value)}
            />
          )}

          <input
            placeholder="Correo electrónico / teléfono"
            value={form.contactoB}
            onChange={(e) => update("contactoB", e.target.value)}
          />

          <p className="note">Esta información no será publicada.</p>
        </section>

        {/* SECCIÓN C */}
        <section>
          <h4>SECCIÓN C — Detención (OBLIGATORIA)</h4>

          <input
            type="date"
            placeholder="Fecha de detencion"
            value={form.fechaDetencionC}
            onChange={(e) => update("fechaDetencionC", e.target.value)}
          />

          <input
            placeholder="Lugar de detención"
            value={form.lugarDetencionC}
            onChange={(e) => update("lugarDetencionC", e.target.value)}
          />

          <input
            placeholder="Centro(s) de reclusión"
            value={form.centrosC}
            onChange={(e) => update("centrosC", e.target.value)}
          />

          <input
            type="date"
            value={form.fechaLiberacionC}
            onChange={(e) => update("fechaLiberacionC", e.target.value)}
            placeholder="Fecha de liberación"
          />
        </section>

        {/* SECCIÓN D */}
        <section>
          <h4>SECCIÓN D — Fallecimiento (si aplica)</h4>

          <input
            type="date"
            value={form.fechaFallecimientoD}
            onChange={(e) => update("fechaFallecimientoD", e.target.value)}
          />

          <input
            placeholder="Lugar del fallecimiento"
            value={form.lugarFallecimientoD}
            onChange={(e) => update("lugarFallecimientoD", e.target.value)}
          />

          <input
            placeholder="Causa oficial reportada"
            value={form.causaOficialD}
            onChange={(e) => update("causaOficialD", e.target.value)}
          />

          <select
            value={form.recibioCuerpoD}
            onChange={(e) => update("recibioCuerpoD", e.target.value)}
          >
            <option value="">¿La familia recibió el cuerpo?</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
            <option value="parcialmente">Parcialmente</option>
          </select>

          <select
            value={form.investigacionD}
            onChange={(e) => update("investigacionD", e.target.value)}
          >
            <option value="">¿Hubo investigación oficial?</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
            <option value="desconoce">Se desconoce</option>
          </select>
        </section>

        {/* SECCIÓN E */}
        <section>
          <h4>SECCIÓN E — Motivo de la detención (OBLIGATORIA)</h4>

          <textarea
            placeholder="Motivo oficial alegado"
            value={form.motivoOficialE}
            onChange={(e) => update("motivoOficialE", e.target.value)}
          />

          <textarea
            placeholder="Motivo real percibido"
            value={form.motivoRealE}
            onChange={(e) => update("motivoRealE", e.target.value)}
          />
        </section>

        {/* SECCIÓN F */}
        <section>
          <h4>SECCIÓN F — Verificación (OBLIGATORIA)</h4>
          <p>Debe adjuntarse al menos una fuente verificable.</p>

          <div className="checkbox-group">
            {[
              ["prensa", "Nota de prensa confiable"],
              ["ong", "Informe de ONG"],
              ["judicial", "Documento judicial"],
              ["defuncion", "Certificado de defunción / informe médico"],
              ["testimonio", "Testimonio firmado de familiar directo"],
              ["otro", "Otro (especificar)"],
            ].map(([key, label]) => (
              <label key={key}>
                <input
                  type="checkbox"
                  checked={form.verificacionF[key]}
                  onChange={(e) =>
                    update(`verificacionF.${key}`, e.target.checked)
                  }
                />{" "}
                {label}
              </label>
            ))}
          </div>

          {form.verificacionF.otro && (
            <input
              placeholder="Especificar"
              value={form.otroFDescripcion}
              onChange={(e) => update("otroFDescripcion", e.target.value)}
            />
          )}
        </section>

        {/* SECCIÓN G */}
        <section>
          <h4>SECCIÓN G — Impacto humano (OPCIONAL)</h4>

          {Object.entries(form.impactoG).map(([key, value]) => (
            <textarea
              key={key}
              placeholder={key
                .replace(/([A-Z])/g, " $1")
                .replace(/([a-z])/, (m) => m.toUpperCase())}
              value={value}
              onChange={(e) => update(`impactoG.${key}`, e.target.value)}
            />
          ))}
        </section>

        {/* SECCIÓN H */}
        <section>
          <h4>SECCIÓN H — Consentimiento (OBLIGATORIA)</h4>

          <select
            value={form.autorizaNombre}
            onChange={(e) => update("autorizaNombre", e.target.value)}
          >
            <option value="">¿Autoriza que el nombre aparezca públicamente?</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>

          <select
            value={form.autorizaImagen}
            onChange={(e) => update("autorizaImagen", e.target.value)}
          >
            <option value="">¿Autoriza el uso de imagen?</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>

          <label>¿Autoriza el uso de fragmentos testimoniales?</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={form.testimonios.textuales}
                onChange={(e) =>
                  update("testimonios.textuales", e.target.checked)
                }
              />{" "}
              Textuales
            </label>

            <label>
              <input
                type="checkbox"
                checked={form.testimonios.editados}
                onChange={(e) =>
                  update("testimonios.editados", e.target.checked)
                }
              />{" "}
              Editados
            </label>

            <label>
              <input
                type="checkbox"
                checked={form.testimonios.noAutoriza}
                onChange={(e) =>
                  update("testimonios.noAutoriza", e.target.checked)
                }
              />{" "}
              No autoriza
            </label>
          </div>

          <textarea
            placeholder="¿Hay algo que NO desea que se publique?"
            value={form.noPublicar}
            onChange={(e) => update("noPublicar", e.target.value)}
          />
        </section>

        <button className="submit-btn">Enviar formulario</button>
      </form>
    </div>
  );
}
