require "./tenant"
require "./apartment"

class Building

  attr_reader :address, :num_floors
  attr_accessor :apartments, :collect_rents

  def initialize address, num_floors
    @address = address
    @num_floors = num_floors
    @floors = {}
  end

  def add floor, apartment
    floor = floor.to_s.to_sym
    if @floors.has_key? floor
      @floors[floor] = []
      @floors[floor] << apartment
    else
      @floors[floor] = []
      @floors[floor] << apartment
    end
  end

  def floor floor_num
    floor_num = floor_num.to_s.to_sym
    @floors[floor_num]
  end

  def collect_rents
    @rent = 0
    @floors.each do |floor_num, floor_apt|
      @floor_rent = 0
      floor_apt.each do |apartment|
        if !apartment.empty?
          @floor_rent += apartment.num_beds * 1000 + apartment.num_baths * 500
        end
      end
      @rent += @floor_rent
    end
    @rent
  end

  def vacancies?
    vacancies = false
    @floors.each do |floor_num, floor_apt|
      floor_apt.each do |apartment|
        if !apartment.full?
          vacancies = true
          break
        end
      end
    end
    vacancies
  end
end

@b1 = Building.new "947 S Sierra Bonita Ave", 2
@b1.add 1, @a1
@b1.add 2, @a2
@a1.move_in @p1
@a1.move_in @p2
@a1.move_in @p3
