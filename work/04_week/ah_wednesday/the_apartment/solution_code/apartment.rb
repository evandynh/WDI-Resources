class Apartment
  attr_reader :unit, :num_beds, :num_baths, :price
  attr_accessor :tenants

  def initialize unit, num_beds, num_baths
    @unit = unit
    @num_beds = num_beds
    @num_baths = num_baths
    @tenants = []
  end

  def price
    price = num_beds * 1000 + num_baths * 500
    @price = "$#{price} per month"
  end

  def studio?
    num_beds == 1 ? true : false
  end

  def empty?
    @tenants.length == 0 ? true : false
  end

  def full?
    @tenants.length == num_beds ? true : false
  end

  def move_in person
    full? ? (puts "We're full! #{person.f_name} #{person.l_name} can't move in!") : (@tenants << person)
  end

end

@a1 = Apartment.new "#4", 3, 2
@a2 = Apartment.new "#7", 2, 1
@a3 = Apartment.new "#3", 2, 2
