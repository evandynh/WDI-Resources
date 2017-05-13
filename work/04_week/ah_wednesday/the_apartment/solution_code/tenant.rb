require 'date'

class Tenant

  attr_accessor :f_name, :l_name, :born_on, :gender, :nickname, :occupation

  def initialize f_name, l_name, gender, born_on
    @f_name = f_name
    @l_name = l_name
    @gender = gender
    @born_on = Date.parse(born_on)
  end

  def full_name
    if nickname != nil
      @full_name = "#{f_name} '#{nickname}' #{l_name}"
    else
      @full_name = "#{f_name} #{l_name}"
    end
  end

  def age
    @age = ((Date.today - @born_on) / 365).floor
  end
end

@p1 = Tenant.new "Eric", "Carreiro", "male", "November 9, 1983"
@p2 = Tenant.new "Kate", "Britton", "female", "June 19, 1985"
@p3 = Tenant.new "Annette", "Fasone", "female", "July 15, 1985"
@p4 = Tenant.new "Doug", "Britton", "male", "June 19, 1985"
