import Container from '../../components/common/Container';
import EventCard from '../../components/common/EventCard';
import Sidebar from '../../components/common/Sidebar';
import EventCardSkel from '../../components/skeleton/EventCardSkel';

const Events = () => (
  <>
    <Sidebar />
    <main className="w-main float-right">
      <Container>
        <div className="p-3.8 border border-border rounded-sm">
          <p className="text-xsm uppercase font-medium mb-3.8 text-light">
            UPCOMING EVENTS
          </p>
          <div className="grid grid-cols-3 gap-3.8">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCardSkel />
          </div>
        </div>
      </Container>
    </main>
  </>
);

export default Events;
