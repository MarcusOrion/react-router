import { teamMembers } from "../script/TeamData";
export default function ChiSiamo() {
  return (
    <section className="container">
      <div className="text-center">
        <h1 className="text-black text-uppercase mt-4">
          In questa pagina scoprirai qualcosa in più di noi!
        </h1>
        <p className="mt-3" size={18}>
          Ecco, qui di seguito puoi trovare gli ideatori di questa fantastica
          pagina
        </p>
        <div className="row g-4 justify-content-center mt-5">
          {teamMembers.map((member) => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={member.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={member.image}
                    className="card-img-top p-3"
                    alt={member.name}
                  />
                  <div className="card-body d-flex flex-column text-center">
                    <h5 className="card-title">{member.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {member.role}
                    </h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
