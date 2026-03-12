/**
 * 🎬 Bollywood Movie Title Fixer
 *
 * Pappu ne ek movie database banaya hai lekin usne saare titles galat type
 * kar diye - kuch ALL CAPS mein, kuch all lowercase mein, kuch mein extra
 * spaces hain. Tu fix kar de titles ko proper Title Case mein!
 *
 * Rules:
 *   - Extra spaces hatao: leading, trailing, aur beech ke multiple spaces ko
 *     single space banao
 *   - Har word ka pehla letter uppercase, baaki lowercase (Title Case)
 *   - EXCEPTION: Chhote words jo Title Case mein lowercase rehte hain:
 *     "ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"
 *     LEKIN agar word title ka PEHLA word hai toh capitalize karo
 *   - Hint: Use trim(), split(), map(), join(), charAt(), toUpperCase(),
 *     toLowerCase(), slice()
 *
 * Validation:
 *   - Agar input string nahi hai, return ""
 *   - Agar string trim karne ke baad empty hai, return ""
 *
 * @param {string} title - Messy Bollywood movie title
 * @returns {string} Cleaned up Title Case title
 *
 * @example
 *   fixBollywoodTitle("  DILWALE   DULHANIA   LE   JAYENGE  ")
 *   // => "Dilwale Dulhania Le Jayenge"
 *
 *   fixBollywoodTitle("dil ka kya kare")
 *   // => "Dil ka Kya Kare"
 */
export function fixBollywoodTitle(title) {
  // Validate input
  if (typeof title !== "string") {
    return "";
  }

  //  Remove leading and trailing spaces
  title = title.trim();

  //  If string becomes empty after trimming
  if (title.length === 0) {
    return "";
  }

  //  Small words that should stay lowercase (except first word)
  const smallWords = [
    "ka",
    "ki",
    "ke",
    "se",
    "aur",
    "ya",
    "the",
    "of",
    "in",
    "a",
    "an",
  ];

  //  Split the title into words (handles multiple spaces)
  const words = title.split(/\s+/);

  //  Convert each word to correct Title Case
  const formattedWords = words.map((word, index) => {
    const lowerWord = word.toLowerCase();

    // If small word and NOT first word → keep lowercase
    if (index !== 0 && smallWords.includes(lowerWord)) {
      return lowerWord;
    }

    // Otherwise capitalize first letter
    return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
  });

  //  Join words back into a sentence
  return formattedWords.join(" ");
}
