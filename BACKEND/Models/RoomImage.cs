using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace BACKEND.Models;

public partial class RoomImage
{
    [Key]
    public int ImageId { get; set; }

    public int RoomId { get; set; }

    [StringLength(255)]
    public string? ImageUrl { get; set; }

    public bool? Approved { get; set; }

    [ForeignKey("RoomId")]
    [InverseProperty("RoomImages")]
    public virtual Room Room { get; set; } = null!;
}
