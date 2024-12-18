
export const orderPostOptions = [
    { value: "newest", label: "Mais novos" },
    { value: "oldest", label: "Mais antigos" }
];

export const sortResults = (results, order) => {
    if (order === "newest") {
        return [...results].reverse();
    }

    return results;
};