import React from 'react';

interface Record {
  id: number;
  name: string;
}

const Marquee = () => {
  const records: Record[] = [];

  for (let i = 1; i <= 10; i++) {
    const record: Record = {
      id: i,
      name: `Lorem ipsum`,
    };
    records.push(record);
  }

  return (
    <div className="relative flex w-full overflow-x-hidden bg-gradient-to-r from-[#5C3D69] from-10% via-emerald-300 via-30% to-[#288876] to-90%">
      <div className="animate-marquee whitespace-nowrap py-2">
        {records.map((record) => (
          <span className="mx-4 text-2xl font-bold uppercase" key={record.id}>
            {record.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
