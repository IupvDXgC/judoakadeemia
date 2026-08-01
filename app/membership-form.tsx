"use client";

import React, { useMemo, useState } from "react";

type Contact = {
  firstname: string;
  lastname: string;
  personalCode: string;
  phone: string;
  email: string;
};

type FormState = {
  _uniqueId: null | string;
  pictureAsFiles: File[];
  medicalFiles: File[];
  legalFiles: File[];
  otherFiles: File[];

  contacts: { others: Contact[] };

  fullLanguage: string;
  heard_from_tmp: string;
  firstname: string;
  lastname: string;
  personalCode: string;
  howDidYouFindUs: string;
  gender: string;
  language: string;
  groupName: string;
  notifications: string;
  heardFrom: string;
  birthday: string;
  ssn: string;
  group_id: number;

  applicant_agreement_email: string;
  agreement_acceptee_name: string;

  heard_from: string;
  heard_from_other: string;
};

const initial: FormState = {
  _uniqueId: null,
  pictureAsFiles: [],
  medicalFiles: [],
  legalFiles: [],
  otherFiles: [],
  contacts: {
    others: [
      {
        firstname: "",
        lastname: "",
        personalCode: "",
        phone: "",
        email: "",
      },
    ],
  },
  fullLanguage: "unknown",
  heard_from_tmp: "friends",
  firstname: "",
  lastname: "",
  personalCode: "",
  howDidYouFindUs: "",
  gender: "male",
  language: "",
  groupName: "",
  notifications: "",
  heardFrom: "",
  birthday: "2000-01-01",
  ssn: "",
  group_id: 82425,
  applicant_agreement_email: "",
  agreement_acceptee_name: "",
  heard_from: "friends",
  heard_from_other: "",
};

function SuccessMessage() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="success-circle mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand">
        <svg
          className="h-10 w-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path className="success-check-path" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="success-text text-2xl font-semibold text-zinc-900">Vastus salvestatud</p>
    </div>
  );
}

export default function MembershipForm() {
  const [form, setForm] = useState<FormState>(initial);

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const setOtherContact = (index: number, patch: Partial<Contact>) => {
    setForm((prev) => {
      const nextOthers = prev.contacts.others.map((c, i) => (i === index ? { ...c, ...patch } : c));
      return { ...prev, contacts: { ...prev.contacts, others: nextOthers } };
    });
  };

  const contact0 = form.contacts.others[0];

  const payload = useMemo(() => {
    const { pictureAsFiles, medicalFiles, legalFiles, otherFiles, ...rest } = form;
    return {
      ...rest,
      pictureAsFiles: pictureAsFiles.map((f) => f.name),
      medicalFiles: medicalFiles.map((f) => f.name),
      legalFiles: legalFiles.map((f) => f.name),
      otherFiles: otherFiles.map((f) => f.name),
    };
  }, [form]);

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/sportlyzer", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        throw new Error(`Request failed (${response.status})`);
      }

      const text = await response.text();
      const data = text ? JSON.parse(text) : null;
      console.log("SUBMIT response:", data);
      setSubmitSuccess(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Submit failed";
      setSubmitError(message);
      console.error("SUBMIT error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl p-6">
        {submitSuccess ? (
          <SuccessMessage />
        ) : (
          <>
        <h2 className="mb-4 text-xl font-semibold text-brand">Liikmetaotlus Judoakadeemia</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <h3 className="mb-2 text-lg font-semibold">Sportlase üldine info</h3>
          <div className="grid gap-4 md:grid-cols-1">
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-zinc-700">Eesnimi</span>
              <input
                  className="block w-full rounded border border-zinc-200 bg-white p-2 text-sm"
                  value={form.firstname}
                  onChange={(e) => setField("firstname", e.target.value)}
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium text-zinc-700">Perekonnanimi</span>
              <input
                  className="block w-full rounded border border-zinc-200 bg-white p-2 text-sm"
                  value={form.lastname}
                  onChange={(e) => setField("lastname", e.target.value)}
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium text-zinc-700">Sugu</span>
              <select
                  className="block w-full rounded border border-zinc-200 bg-white p-2 text-sm"
                  value={form.gender}
                  onChange={(e) => setField("gender", e.target.value)}
              >
                <option value="male">Mees</option>
                <option value="female">Naine</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium text-zinc-700">Sünnikuupäev</span>
              <input
                  type="date"
                  className="block w-full rounded border border-zinc-200 bg-white p-2 text-sm"
                  value={form.birthday}
                  onChange={(e) => setField("birthday", e.target.value)}
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium text-zinc-700">Keel</span>
              <select
                  className="block w-full rounded border border-zinc-200 bg-white p-2 text-sm"
                  value={form.language}
                  onChange={(e) => setField("language", e.target.value)}
              >
                <option value="male">Eesti</option>
                <option value="female">Inglise</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium text-zinc-700">Isikukood</span>
              <input
                  className="block w-full rounded border border-zinc-200 bg-white p-2 text-sm"
                  value={form.personalCode}
                  onChange={(e) => setField("lastname", e.target.value)}
              />
            </label>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">Kontaktisik</h3>
            <div className="grid gap-4 md:grid-cols-1">
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-zinc-700">Eesnimi</span>
                <input
                    className="block w-full rounded border border-zinc-200 bg-white p-2 text-sm"
                    value={contact0?.firstname ?? ""}
                    onChange={(e) => setOtherContact(0, {firstname: e.target.value})}
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-sm font-medium text-zinc-700">Perekonnanimi</span>
                <input
                    className="block w-full rounded border border-zinc-200 bg-white p-2 text-sm"
                    value={contact0?.lastname ?? ""}
                    onChange={(e) => setOtherContact(0, {lastname: e.target.value})}
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-sm font-medium text-zinc-700">Isikukood</span>
                <input
                    className="block w-full rounded border border-zinc-200 bg-white p-2 text-sm"
                    value={contact0?.phone ?? ""}
                    onChange={(e) => setOtherContact(0, {phone: e.target.value})}
                />
              </label>

              <label className="block md:col-span-2">
                <span className="mb-1 block text-sm font-medium text-zinc-700">E-mail</span>
                <input
                    type="email"
                    className="block w-full rounded border border-zinc-200 bg-white p-2 text-sm"
                    value={contact0?.email ?? ""}
                    onChange={(e) => setOtherContact(0, {email: e.target.value})}
                />
              </label>

              <label className="block md:col-span-2">
                <span className="mb-1 block text-sm font-medium text-zinc-700">Telefon</span>
                <input
                    type="email"
                    className="block w-full rounded border border-zinc-200 bg-white p-2 text-sm"
                    value={contact0?.email ?? ""}
                    onChange={(e) => setOtherContact(0, {email: e.target.value})}
                />
              </label>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">Muu</h3>
            <div className="grid gap-4 md:grid-cols-1">
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-zinc-700">Eesnimi</span>
                <input
                    className="block w-full rounded border border-zinc-200 bg-white p-2 text-sm"
                    value={contact0?.firstname ?? ""}
                    onChange={(e) => setOtherContact(0, {firstname: e.target.value})}
                />
              </label>

              <label className="block md:col-span-2">
                <span className="mb-1 block text-sm font-medium text-zinc-700">Telefon</span>
                <input
                    type="email"
                    className="block w-full rounded border border-zinc-200 bg-white p-2 text-sm"
                    value={contact0?.email ?? ""}
                    onChange={(e) => setOtherContact(0, {email: e.target.value})}
                />
              </label>
            </div>
          </div>
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-zinc-700">Vali treeninggrupp</span>
            <select
                className="block w-full rounded border border-zinc-200 bg-white p-2 text-sm"
                value={form.groupName}
                onChange={(e) => setField("gender", e.target.value)}
            >
              <option value="male">Algajad</option>
              <option value="female">Proffessionaalid</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium text-zinc-700">Soovin saada ürituste meeldetuletusi ja uuendusi</span>
            <select
                className="block w-full rounded border border-zinc-200 bg-white p-2 text-sm"
                value={form.notifications}
                onChange={(e) => setField("notifications", e.target.value)}
            >
              <option value="male">E-posti ja telefoni teavituste kaudu</option>
              <option value="female">Ainult läbi telefoni teavituste</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium text-zinc-700">Kuidas sa meid leidsid?</span>
            <select
                className="block w-full rounded border border-zinc-200 bg-white p-2 text-sm"
                value={form.howDidYouFindUs}
                onChange={(e) => setField("howDidYouFindUs", e.target.value)}
            >
              <option value="male">Internet</option>
              <option value="female">Sõbrad</option>
              <option value="female">Muu</option>
              <option value="female">Kool/Lasteaed</option>
              <option value="female">Välireklaam</option>
              <option value="female">Sotsiaalmeedia</option>
              <option value="female">Flaierid/Bännerid</option>
            </select>
          </label>

          {submitError ? (
            <p className="text-sm text-red-600">{submitError}</p>
          ) : null}

          <div className="flex justify-center">
          <button
              type="submit"
              disabled={submitting}
              className="rounded bg-brand px-5 py-2 text-white hover:bg-brand-hover disabled:opacity-50"
          >
            {submitting ? "Saadan..." : "Edasi allkirjastama"}
          </button>
          </div>
        </form>
          </>
        )}
      </div>
  );
}
