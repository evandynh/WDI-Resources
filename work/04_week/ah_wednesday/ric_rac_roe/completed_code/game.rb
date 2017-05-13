class Game

  def initialize
    puts "\n\n\nL e t s   P l a y   R i c - R a c - R o e !\n\n"
  end

  def play
    new_game
    until @winner do
      print_board
      puts "Player #{@turn.to_s.upcase}'s Move"
      print "Enter A, B or C for Column and 1, 2 or 3 for Row (e.g., B2): "
      until get_move 
      end
      @turn = @turn == :x ? :o : :x
      @winner = get_winner
    end
    print_winner
  end

  private

  def new_game
    @winner = nil
    @turn = :x
    @board = {
      a1: 0, b1: 0, c1: 0,
      a2: 0, b2: 0, c2: 0,
      a3: 0, b3: 0, c3: 0
    }
  end

  def print_board
    puts ""
    puts "    A   B   C"
    puts
    puts "1)  #{xo :a1} | #{xo :b1} | #{xo :c1}"
    puts "   -----------"
    puts "2)  #{xo :a2} | #{xo :b2} | #{xo :c2}"
    puts "   -----------"
    puts "3)  #{xo :a3} | #{xo :b3} | #{xo :c3}"
    puts
  end

  def print_winner
    print_board
    2.times { puts }
    case @winner
    when 0 then puts "Another TIE!"
    when 1 then puts "Congrats Player X!"
    when -1 then puts "Congrats Player O!"
    end
    4.times { puts }
  end

  def xo(square)
    case @board[square]
    when 0 then " "
    when 1 then "X"
    when -1 then "O"
    end
  end

  def get_move
    move = gets.chomp.downcase
    if ('a'..'c').include?(move[0]) && ('1'..'3').include?(move[1])
      if @board[move.to_sym] == 0 then
        @board[move.to_sym] = (@turn == :x) ? 1 : -1
      else
        puts "Cell already occupied!"
        print "Enter A, B or C for Column and 1, 2 or 3 for Row (e.g., B2): "
        return false
      end
      true
    else
      puts "Invalid move!"
      print "Enter A, B or C for Column and 1, 2 or 3 for Row (e.g., B2): "
      false
    end
  end

  def get_winner
    if (@board[:a1] + @board[:b1] + @board[:c1]).abs == 3 then return @board[:a1] end
    if (@board[:a2] + @board[:b2] + @board[:c2]).abs == 3 then return @board[:a2] end
    if (@board[:a3] + @board[:b3] + @board[:c3]).abs == 3 then return @board[:a3] end
    if (@board[:a1] + @board[:a2] + @board[:a3]).abs == 3 then return @board[:a1] end
    if (@board[:b1] + @board[:b2] + @board[:b3]).abs == 3 then return @board[:b1] end
    if (@board[:c1] + @board[:c2] + @board[:c3]).abs == 3 then return @board[:c1] end
    if (@board[:a1] + @board[:b2] + @board[:c3]).abs == 3 then return @board[:a1] end
    if (@board[:c1] + @board[:b2] + @board[:a3]).abs == 3 then return @board[:c1] end
    if @board.values.include?(0) then return nil end
    0
  end

end