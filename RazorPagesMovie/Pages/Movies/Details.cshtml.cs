using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using RazorPagesMovie.Models;

namespace RazorPagesMovie.Pages_Movies
{
    public class DetailsModel : PageModel
    {
        private readonly RazorPagesMovieContext _context;

        public DetailsModel(RazorPagesMovieContext context)
        {
            _context = context;
        }

      public MyMovie MyMovie { get; set; } = default!; 

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null || _context.MyMovie == null)
            {
                return NotFound();
            }

            var mymovie = await _context.MyMovie.FirstOrDefaultAsync(m => m.ID == id);
            if (mymovie == null)
            {
                return NotFound();
            }
            else 
            {
                MyMovie = mymovie;
            }
            return Page();
        }
    }
}
