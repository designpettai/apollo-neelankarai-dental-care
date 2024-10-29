import { Container } from '@/components/Container';

export function Statistics() {
  const stats = [
    { label: 'Happy Patients', value: '25L+' },
    { label: 'Specialists', value: '500' },
    { label: 'Cities', value: '25' },
    { label: 'Locations', value: '175' },
  ];

  return (
    <div style={{ backgroundColor: '#eef2ff' }} className="py-12">
      <Container> 
        <div className="mx-auto">
          <dl className="flex flex-col sm:flex-row justify-evenly gap-6 sm:gap-10 lg:gap-12" role="definition">
            {stats.map(({ label, value }, index) => (
              <div key={index}>
                <dt className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-900 mb-2" role="term">
                  {label}
                </dt>
                <dd className="mt-0.5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-500" role="definition">
                  <span className="count-up">{value}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  );
}
