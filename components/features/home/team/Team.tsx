import TeamCard from "@/components/common/cards/TeamCard";
import CommonHeader from "@/components/common/header/Header";
import { TEAMS } from "@/lib/constants";
import { isValidArray } from "@/lib/global-helpers";

const Team = () => {
  return (
    <section className="mt-20">
      <CommonHeader
        title="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />
      <div className="mt-12 lg:mt-20">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {isValidArray(TEAMS) &&
            TEAMS.map((teamMember) => (
              <TeamCard
                key={teamMember.name}
                name={teamMember.name}
                role={teamMember.role}
                image={teamMember.image.src}
                description={teamMember.description}
              />
            ))}
        </section>
      </div>
    </section>
  );
};

export default Team;
